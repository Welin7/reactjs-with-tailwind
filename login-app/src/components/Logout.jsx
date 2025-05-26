import React from 'react';
import { logout } from '../api/Auth';

const Logout = ({ onLogout }) => {
    const handleLogout = async () => {
        await logout();
        onLogout();
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;