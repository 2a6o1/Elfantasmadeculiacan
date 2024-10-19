import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Galleta Fallecida</h1>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Inicio</a></li>
                    <li><a href="#" className="hover:underline">Acerca</a></li>
                    <li><a href="#" className="hover:underline">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
