import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCarousel from './components/ProductCarousel';
import AcercaDe from './components/AcercaDe';
import Contactanos from './components/Contactanos';
import AdminPad from './components/AdminPad';

function App() {
    return (
        <Router basename="/Elfantasmadeculiacan"> {/* Asegúrate de añadir el basename aquí */}
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
                    <Routes>
                        <Route path="/" element={
                            <section className="container mx-auto p-4">
                                <h1 className="text-4xl font-bold text-center">Bienvenido a Galleta Fallecida</h1>
                                <p className="mt-4 text-center">
                                    Esta es la estructura básica de una página web usando React y Tailwind CSS.
                                </p>
                                {/* Product Carousel */}
                                <ProductCarousel />
                            </section>
                        } />
                        <Route path="/acerca-de" element={<AcercaDe />} />
                        <Route path="/contactanos" element={<Contactanos />} />
                        <Route path="/admin-pad" element={<AdminPad />} />
                    </Routes>
                </main>

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

                <Footer />
            </div>
        </Router>
    );
}

export default App;
