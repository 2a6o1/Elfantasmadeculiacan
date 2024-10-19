import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCarousel from './components/ProductCarousel'; // Importa el carrusel

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>

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
            <ProductCarousel/>

            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-gray-200 p-4">
                    <div className="p-4">
                        <h2 className="text-xl font-bold">Ghost Cookies</h2>
                        <p className="mt-2 text-gray-600">Home</p>
                        <p className="mt-2 text-gray-600">Productos</p>
                        <p className="mt-2 text-gray-600">Contacto</p>
                    </div>
                    <div className="p-4">
                        <h2 className="text-xl font-bold">¿Preguntas?</h2>
                        <p className="mt-2 text-gray-600">metaselas por la cola</p>
                        <h1 className="text-sm font-bold">¿Llámanos?</h1>
                        <p className="mt-2 text-gray-600">metaselas por la cola</p>
                    </div>
                    <div className="p-4">
                    <h2 className="text-xl font-bold">Síguenos</h2>
                        <p className="mt-2 text-gray-600">lorem3 text</p>
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    );
}

export default App;
