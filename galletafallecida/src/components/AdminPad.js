import React, { useState } from 'react';

const AdminPad = () => {
    // Manejamos el estado para username y password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Función para manejar el submit del formulario
    const handleLogin = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica de autenticación
        console.log('Username:', username);
        console.log('Password:', password);
        // Limpia los campos de input
        setUsername('');
        setPassword('');
    };

    return (
        <div className="admin-pad min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                <form onSubmit={handleLogin}>
                    {/* Campo para el nombre de usuario */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    {/* Campo para la contraseña */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {/* Botón para iniciar sesión */}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminPad;
