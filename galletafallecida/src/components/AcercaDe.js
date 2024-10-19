import React from 'react';

const AcercaDe = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-4">Acerca de Nosotros</h1>
            <div className="grid grid-cols-1  gap-4 mb-8">
                <div>
                    <p className="text-gray-700 mb-4">
                        En Galleta Fallecida, nuestra misión es ofrecer los mejores productos de alta calidad
                        para satisfacer las necesidades de nuestros clientes. Nos dedicamos a crear galletas
                        deliciosas y únicas que no solo se ven bien, sino que también saben increíble.
                    </p>

                </div>

            </div>

            <h2 className="text-2xl font-bold mb-2">Nuestra Historia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                    <p className="text-gray-700 mb-4">
                        Fundada en 2023, Galleta Fallecida comenzó como un pequeño emprendimiento con el
                        objetivo de revolucionar la forma en que la gente disfruta de las galletas. Desde
                        entonces, hemos crecido y evolucionado, siempre manteniendo nuestra dedicación a la
                        calidad y la satisfacción del cliente.
                    </p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Leer Más</button>
                </div>
                <div>
                    <img
                        src="https://via.placeholder.com/400"
                        alt="Imagen de nuestra historia"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-2">Nuestra Filosofía</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                    <img
                        src="https://via.placeholder.com/400"
                        alt="Imagen de nuestra filosofía"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>
                <div>
                    <p className="text-gray-700 mb-4">
                        Creemos en la autenticidad, la creatividad y la comunidad. Cada galleta que creamos
                        es un reflejo de nuestra pasión por lo que hacemos y de nuestro compromiso con
                        nuestros clientes. Nos esforzamos por ser una empresa responsable que respete el
                        medio ambiente y apoye a los productores locales.
                    </p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Descubre Más</button>
                </div>
            </div>


            <h2 className="text-2xl font-bold mb-2">Contáctanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                    <p className="text-gray-700 mb-4">
                        Si deseas saber más sobre nosotros o nuestros productos, no dudes en contactarnos a
                        través de nuestro formulario de contacto.
                    </p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Contáctanos</button>
                </div>
                <div>
                    <img
                        src="https://i.pinimg.com/736x/6b/da/4b/6bda4baf21908675b57fab8918b6d971.jpg"
                        alt="Imagen de contacto"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>
            </div>
        </div>
    );
};

export default AcercaDe;
