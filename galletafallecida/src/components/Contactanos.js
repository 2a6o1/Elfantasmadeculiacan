import React from 'react';

const Contactanos = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Contáctanos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Primera columna: Botones y imagen */}
                <div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <button className="bg-blue-500 text-white py-2 rounded">Botón 1</button>
                        <button className="bg-blue-500 text-white py-2 rounded">Botón 2</button>
                        <button className="bg-blue-500 text-white py-2 rounded">Botón 3</button>
                        <button className="bg-blue-500 text-white py-2 rounded">Botón 4</button>
                    </div>
                    <img
                        src="https://via.placeholder.com/400"
                        alt="Imagen de contacto"
                        className="w-full h-auto object-cover rounded"
                    />
                </div>

                {/* Segunda columna: Formulario de correo electrónico */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mb-4">Envíanos un Mensaje</h2>
                    <form className="flex flex-col">
                        <label className="mb-2" htmlFor="email">
                            Correo Electrónico:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 p-2 rounded mb-4"
                            placeholder="tuemail@ejemplo.com"
                            required
                        />
                        <label className="mb-2" htmlFor="message">
                            Mensaje:
                        </label>
                        <textarea
                            id="message"
                            className="border border-gray-300 p-2 rounded mb-4"
                            rows="4"
                            placeholder="Escribe tu mensaje aquí..."
                            required
                        ></textarea>
                        <button className="bg-blue-500 text-white py-2 rounded">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contactanos;
