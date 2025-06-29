import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../api/Auth';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({userName, password});
            alert('Cadastro realizado com sucesso!');
            navigate('/login'); // redireciona para o login após registro
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setError('Falha no cadastro. Verifique os dados e tente novamente.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-white-400">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-black-800 mb-6">Create Account</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="youremail@exemplo.com"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-400 focus:outline-none"
                        />
                    </div>
                    {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                    >
                        Register
                    </button>
                    <p className="flex items-center justify-center text-sm">
                        Do you have an account?&nbsp;
                        <Link to="/login" className="text-violet-600 hover:underline font-medium">
                            To enter in Account.
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
