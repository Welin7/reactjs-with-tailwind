import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../api/Auth';

const Logout = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        onLogout();
        navigate('/login'); // redireciona para login após logout
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
                To go out
            </button>
        </div>
    );
};

export default Logout;
