import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCarousel from './components/ProductCarousel'; // Importa el carrusel

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Banner Section */}
            <section className="w-full">
                <img
                    src="https://via.placeholder.com/1200x400"
                    alt="Banner"
                    className="w-full h-64 object-cover"
                />
            </section>

            <main className="flex-grow">
                <section className="container mx-auto p-4">
                    <h1 className="text-4xl font-bold text-center">Bienvenido a Galleta Fallecida</h1>
                    <p className="mt-4 text-center">
                        Esta es la estructura básica de una página web usando React y Tailwind CSS.
                    </p>
                </section>
            </main>

            {/* Product Carousel */}
            <ProductCarousel />



            <Footer />
     </div>
    );
}

export default App;
