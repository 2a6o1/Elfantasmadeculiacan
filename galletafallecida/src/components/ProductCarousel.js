import React, { useState, useEffect } from 'react';

// Array de productos con imágenes, títulos y descripciones
const products = [
    {
        image: 'https://via.placeholder.com/1200x400/FF5733/FFFFFF?text=Product+1',
        title: 'Producto 1',
        description: 'Esta es una descripción del producto 1.',
    },
    {
        image: 'https://via.placeholder.com/1200x400/33FF57/FFFFFF?text=Product+2',
        title: 'Producto 2',
        description: 'Esta es una descripción del producto 2.',
    },
    {
        image: 'https://via.placeholder.com/1200x400/3357FF/FFFFFF?text=Product+3',
        title: 'Producto 3',
        description: 'Esta es una descripción del producto 3.',
    },
    {
        image: 'https://via.placeholder.com/1200x400/57FF33/FFFFFF?text=Product+4',
        title: 'Producto 4',
        description: 'Esta es una descripción del producto 4.',
    },
    {
        image: 'https://via.placeholder.com/1200x400/FF3357/FFFFFF?text=Product+5',
        title: 'Producto 5',
        description: 'Esta es una descripción del producto 5.',
    },
    {
        image: 'https://via.placeholder.com/1200x400/5733FF/FFFFFF?text=Product+6',
        title: 'Producto 6',
        description: 'Esta es una descripción del producto 6.',
    },
];

const ProductCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar las imágenes cada 10 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 3));
        }, 10000);

        // Limpiar el intervalo cuando se desmonte el componente
        return () => clearInterval(interval);
    }, []);

    // Definir los productos visibles según el índice actual
    const visibleProducts = products.slice(currentIndex * 3, (currentIndex * 3) + 3);

    return (
        <div className="w-full relative p-4">
            {/* Contenedor en grid: 3 columnas en pantallas grandes, 1 columna en móviles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {visibleProducts.map((product, index) => (
                    <div key={index} className="w-full h-auto text-center border p-4 rounded-md shadow-lg">
                        {/* Imagen del producto */}
                        <div className="w-full h-64">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Título y descripción */}
                        <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>

            {/* Puntos de navegación */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[...Array(Math.ceil(products.length / 3)).keys()].map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-white' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
