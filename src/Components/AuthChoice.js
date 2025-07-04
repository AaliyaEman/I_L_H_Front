import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthChoice = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Welcome! Please choose an option:</h2>
            <div className="flex space-x-4">
                <button
                    onClick={() => navigate('/login')}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
                <button
                    onClick={() => navigate('/register')}
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-200"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default AuthChoice;