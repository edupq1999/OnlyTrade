import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    const addProduct = (producto) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(item => item.id === producto.id);
            if (existingItemIndex >= 0) {
                const newItems = prevItems.map((item, index) => {
                    if (index === existingItemIndex) {
                        return { ...item, cantidad: item.cantidad + 1 };
                    }
                    return item;
                });
                localStorage.setItem('cartItems', JSON.stringify(newItems));
                return newItems;
            } else {
                const newItems = [...prevItems, { ...producto, cantidad: 1 }];
                localStorage.setItem('cartItems', JSON.stringify(newItems));
                return newItems;
            }
        });
    };

    const increaseQuantity = (id) => {
        setItems((prevItems) => {
            const newItems = prevItems.map(item => {
                if (item.id === id) {
                    return { ...item, cantidad: item.cantidad + 1 };
                }
                return item;
            });
            localStorage.setItem('cartItems', JSON.stringify(newItems));
            return newItems;
        });
    };

    const decreaseQuantity = (id) => {
        setItems((prevItems) => {
            const newItems = prevItems
                .map(item => {
                    if (item.id === id) {
                        return { ...item, cantidad: item.cantidad - 1 };
                    }
                    return item;
                })
                .filter(item => item.cantidad > 0);
            localStorage.setItem('cartItems', JSON.stringify(newItems));
            return newItems;
        });
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items));
    }, [items]);

    const getItems = () => {
        return items;
    };

    return (
        <CartContext.Provider value={{ items, addProduct, increaseQuantity, decreaseQuantity, getItems, setItems }}>
            {children}
        </CartContext.Provider>
    );
};
