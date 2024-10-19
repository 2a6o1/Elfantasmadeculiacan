import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between">
                <Link to="/admin-pad">
                    <h1 className="text-xl">Galleta Fallecida</h1>
                </Link>
                <div>
                    <Link to="/" className="mr-4">Inicio</Link>
                    <Link to="/acerca-de" className="mr-4">Acerca de</Link>
                    <Link to="/contactanos" className="mr-4">Contáctanos</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
