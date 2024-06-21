import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('cartItems');
        return savedItems ? JSON.parse(savedItems) : [];
    });

    const addProduct = (producto) => {
        setItems((prevItems) => {
            const newItems = [...prevItems, producto];
            localStorage.setItem('cartItems', JSON.stringify(newItems));
            return newItems;
        });
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(items));
        console.log('Items:', items);
    }, [items]);

    const getItems = () => {
        return items;
    };

    return (
        <CartContext.Provider value={{ items, addProduct, getItems }}>
            {children}
        </CartContext.Provider>
    );
};
