
import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import { refreshTokens } from './api/Auth';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            refreshTokens()
                .then(() => setIsAuthenticated(true))
                .catch(() => setIsAuthenticated(false));
        }
    }, []);

    const handleLogin = () => setIsAuthenticated(true);
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <div>
            {isAuthenticated ? (
                <div>
                    <h1>Welcome!</h1>
                    <Logout onLogout={handleLogout} />
                </div>
            ) : (
                <div>
                    <Login onLogin={handleLogin} />
                    <Register />
                </div>
            )}
        </div>
    );
};

export default App;
