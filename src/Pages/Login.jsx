import React, { useState } from 'react';
import { useAuth } from '../Context/Authcontex';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        // Simulasi API call
        if (formData.email === 'admin@test.com' && formData.password === 'password') {
        const userData = { id: 1, email: formData.email, name: 'Admin User' };
        const token = 'fake-jwt-token-123';

        login(userData, token);
        navigate('/dashboard');
    } else {
        alert('Email atau password salah!');
    }
} catch (error) {
    console.error('Login error:', error);
} finally {
    setLoading(false);
}
};
return (
    <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700 p-4 sm:p-7">
        <div class="p-4 sm:p-7">
            <h2 Class="block text-2xl font-bold text-gray-800 dark:text-white text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label Class="block text-sm mb-2 dark:text-white">Email:</label>
                    <input
                    type="email"
                    name="email"
                    Class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600 "
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>

<div className="form-group">
    <label class="block text-sm mb-2 dark:text-white">Password:</label>
    <input
    type="password"
    name="password"
    Class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    value={formData.password}
    onChange={handleChange}
    required
/>
</div>

<button type="submit" disabled={loading} class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
    {loading ? 'Loading...' : 'Login'}
</button>
</form>

<p class="mt-2 text-sm text-gray-600 dark:text-neutral-400 text-center">
Belum punya akun? <Link class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" to="/register">Daftar di sini</Link>
</p>

<div className="demo-info">
    <p Class="block text-sm mb-2 dark:text-white"><strong>Demo Account:</strong></p>
        <p Class="block text-sm mb-2 dark:text-white">Email: admin@test.com</p>
    <p Class="block text-sm mb-2 dark:text-white">Password: password</p>
</div>
</div>
</div>
);
};
export default Login;