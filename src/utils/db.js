const products = [
    {
        id: 1,
        nombreProducto: "Camisa",
        precio: 20.00,
        stock: 10,
        descripcionProducto: "Camisa de algodón",
        categoriasProducto: ["prendas"],
        imagen: "https://s03.s3c.es/imag/_v0/770x420/c/4/0/camisa-nueva.jpg"
    },
    {
        id: 2,
        nombreProducto: "Mesa de centro",
        precio: 150.00,
        stock: 5,
        descripcionProducto: "Mesa de madera para el salón",
        categoriasProducto: ["hogar"],
        imagen: "https://promart.vteximg.com.br/arquivos/ids/3935795-1000-1000/image-f423557dac174850aa493283cc4aeb47.jpg?v=637779969567430000"
    },
    {
        id: 3,
        nombreProducto: "Teléfono móvil",
        precio: 500.00,
        stock: 8,
        descripcionProducto: "Teléfono inteligente con pantalla táctil",
        categoriasProducto: ["tecnologia"],
        imagen: "https://d500.epimg.net/cincodias/imagenes/2020/11/16/lifestyle/1605555641_363320_1605556525_noticia_normal.jpg"
    },
    {
        id: 4,
        nombreProducto: "Pantalones",
        precio: 35.00,
        stock: 15,
        descripcionProducto: "Pantalones de mezclilla",
        categoriasProducto: ["prendas"],
        imagen: "https://www.corbataslester.com/magazine/wp-content/uploads/2022/12/5-tipos-de-pantalones-para-renovar-tu-armario-este-invierno.jpg"
    },
    {
        id: 5,
        nombreProducto: "Lámpara de mesa",
        precio: 50.00,
        stock: 3,
        descripcionProducto: "Lámpara de mesa con base de cerámica",
        categoriasProducto: ["hogar"],
        imagen: "https://broncesmarisa.com/wp-content/uploads/2015/12/lamparas-mes-br.jpg"
    },
    {
        id: 6,
        nombreProducto: "Smartwatch",
        precio: 200.00,
        stock: 10,
        descripcionProducto: "Reloj inteligente con seguimiento de actividad",
        categoriasProducto: ["tecnologia"],
        imagen: "https://tendencybook.com/wp-content/uploads/2021/07/smart-1.jpg"
    },
    {
        id: 7,
        nombreProducto: "Blusa",
        precio: 25.00,
        stock: 12,
        descripcionProducto: "Blusa de seda",
        categoriasProducto: ["prendas"],
        imagen: "https://www.shutterstock.com/image-photo/blue-colour-blouse-clothes-hanger-260nw-1194701143.jpg"
    },
    {
        id: 8,
        nombreProducto: "Cojín decorativo",
        precio: 30.00,
        stock: 6,
        descripcionProducto: "Cojín con estampado floral",
        categoriasProducto: ["hogar"],
        imagen: "https://casasyestilos.com.pe/images/cojines-amarillos.jpg"
    },
    {
        id: 9,
        nombreProducto: "Auriculares inalámbricos",
        precio: 80.00,
        stock: 7,
        descripcionProducto: "Auriculares Bluetooth con cancelación de ruido",
        categoriasProducto: ["tecnologia"],
        imagen: "https://sony.scene7.com/is/image/sonyglobalsolutions/Product%20primary%20image-1?$categorypdpnav$&fmt=png-alpha"
    },
    {
        id: 10,
        nombreProducto: "Vestido",
        precio: 50.00,
        stock: 9,
        descripcionProducto: "Vestido elegante de noche",
        categoriasProducto: ["prendas"],
        imagen: "https://elcomercio.pe/resizer/bawhT6h7O6qprUfqhiXsjGd1kj0=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YBCA4LFSCRC7XGXAQZ7PUKDNTI.png"
    },
    {
        id: 11,
        nombreProducto: "Silla de escritorio",
        precio: 120.00,
        stock: 4,
        descripcionProducto: "Silla ergonómica para la oficina",
        categoriasProducto: ["hogar"],
        imagen: "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F1574%2FDECOHOGAR%2FATLANTIS-XJ-FC_180714659182_13.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=10a5d2b366116b04ce8452f62fc1c198"
    },
    {
        id: 13,
        nombreProducto: "Zapatos deportivos",
        precio: 60.00,
        stock: 20,
        descripcionProducto: "Zapatos cómodos para hacer ejercicio",
        categoriasProducto: ["prendas"],
        imagen: "https://paylesspe.vtexassets.com/arquivos/ids/243920/192838_1.jpg?v=637878345507830000"
    },
    {
        id: 14,
        nombreProducto: "Cafetera",
        precio: 80.00,
        stock: 8,
        descripcionProducto: "Cafetera de acero inoxidable",
        categoriasProducto: ["hogar"],
        imagen: "https://ripleype.imgix.net/https%3A%2F%2Fdpq25p1ucac70.cloudfront.net%2Fseller-place-files%2Fmrkl-files%2F140%2FMARKETPLACE%20INTERNACIONAL%2F71BPskNiL3L_195519124756_55.jpeg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=339c6b17e9553b76d895f5b822e54875"
    },
    {
        id: 15,
        nombreProducto: "Laptop",
        precio: 1000.00,
        stock: 5,
        descripcionProducto: "Laptop con procesador Intel y 8 GB de RAM",
        categoriasProducto: ["tecnologia"],
        imagen: "https://falabella.scene7.com/is/image/FalabellaPE/18939848_1?wid=800&hei=800&qlt=70"
    },
    {
        id: 16,
        nombreProducto: "Chaqueta",
        precio: 75.00,
        stock: 12,
        descripcionProducto: "Chaqueta de cuero para hombre",
        categoriasProducto: ["prendas"],
        imagen: "https://www.shutterstock.com/image-photo/blank-template-blue-down-jacket-260nw-1239023632.jpg"
    },
    {
        id: 17,
        nombreProducto: "Set de cuchillos",
        precio: 120.00,
        stock: 6,
        descripcionProducto: "Set de cuchillos de acero inoxidable",
        categoriasProducto: ["hogar"],
        imagen: "https://plazavea.vteximg.com.br/arquivos/ids/2607993-450-450/image-48cd2f7718bc4a15acb228f0b456a9de.jpg?v=637699284642630000"
    },
    {
        id: 18,
        nombreProducto: "Altavoz Bluetooth",
        precio: 50.00,
        stock: 10,
        descripcionProducto: "Altavoz portátil con conexión inalámbrica",
        categoriasProducto: ["tecnologia"],
        imagen: "https://i.linio.com/p/8be2d4a22bf1c9b30dff593edcd15d8d-product.jpg"
    },
    {
        id: 19,
        nombreProducto: "Vestido de fiesta",
        precio: 90.00,
        stock: 7,
        descripcionProducto: "Vestido elegante para ocasiones especiales",
        categoriasProducto: ["prendas"],
        imagen: "https://i.ebayimg.com/thumbs/images/g/fCMAAOSwbstilMUN/s-l225.jpg"
    },
    {
        id: 20,
        nombreProducto: "Set de sábanas",
        precio: 40.00,
        stock: 9,
        descripcionProducto: "Set de sábanas de algodón para cama matrimonial",
        categoriasProducto: ["hogar"],
        imagen: "https://mercado.ripleylabs.com/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-11-at-1.21.28-PM.jpeg"
    },
    {
        id: 21,
        nombreProducto: "Monitor de computadora",
        precio: 250.00,
        stock: 4,
        descripcionProducto: "Monitor de 24 pulgadas con resolución Full HD",
        categoriasProducto: ["tecnologia"],
        imagen: "https://images.samsung.com/is/image/samsung/p6pim/pe/lf27t350fhlxpe/gallery/pe-t35f-lf27t350fhlxpe-348397999?$650_519_PNG$"
    }
];
export default products;