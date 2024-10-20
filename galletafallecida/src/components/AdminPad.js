import React, { useState } from 'react';
import axios from 'axios'; // Importa Axios

const AdminPad = () => {
    // Manejamos el estado para username, password y si el usuario ha iniciado sesión
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // Estado para mostrar mensajes
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar si el usuario está logueado

    // Función para manejar el submit del formulario
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            // Realiza la solicitud POST al servidor
            const response = await axios.post('http://localhost:3001/login', {
                username: username,
                password: password,
            });

            // Maneja la respuesta si las credenciales son correctas
            if (response.data.token) {
                // Guarda el token en localStorage
                localStorage.setItem('token', response.data.token);
                console.log(`Token guardado en localStorage: ${response.data.token}`); // Agrega el console.log
                setMessage('¡Login exitoso!'); // Mensaje de éxito
                setIsLoggedIn(true); // Cambia el estado a logueado
            }
        } catch (error) {
            // Maneja errores, como credenciales incorrectas
            if (error.response) {
                setMessage(error.response.data.message); // Muestra el mensaje de error del servidor
            } else {
                setMessage('Error al conectar con el servidor');
            }
        }

        // Limpia los campos de input
        setUsername('');
        setPassword('');
    };

    return (
        <div className="admin-pad min-h-screen flex items-center justify-center bg-gray-100">
            {/* Sección de Login */}
            {!isLoggedIn ? (
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    {message && <p className="text-red-500 text-center mb-4">{message}</p>} {/* Mostrar mensajes */}
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
            ) : (
                // Sección que se muestra después de iniciar sesión
                <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
                    {/* Inputs adicionales */}
                    <form>
                        {/* Cuatro inputs */}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input1">
                                Input 1
                            </label>
                            <input
                                id="input1"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Input 1"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input2">
                                Input 2
                            </label>
                            <input
                                id="input2"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Input 2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input3">
                                Input 3
                            </label>
                            <input
                                id="input3"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Input 3"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input4">
                                Input 4
                            </label>
                            <input
                                id="input4"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Input 4"
                                required
                            />
                        </div>
                        {/* Botones de acción */}
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Guardar
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Cancelar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AdminPad;
