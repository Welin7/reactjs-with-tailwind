
const API_URL = 'https://localhost:7214/api';

export const login = async (credentials) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/Auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) throw new Error('Falha no login');

    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userInfo) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`${API_URL}/Auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) throw new Error('Falha no registro');

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const refreshTokens = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include', // se o refresh token estiver no cookie
    });

    if (!response.ok) throw new Error('Falha ao atualizar token');

    const data = await response.json();
    localStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    console.error(error);
    logout();
    throw error;
  }
};
