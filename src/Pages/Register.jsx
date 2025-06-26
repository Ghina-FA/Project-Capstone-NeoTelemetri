import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
password: '',
confirmPassword: ''
});
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};
const handleSubmit = async (e) => {
e.preventDefault();
if (formData.password !== formData.confirmPassword) {
alert('Password tidak cocok!');
return;
}
setLoading(true);
try {
// Simulasi API call
console.log('Registering user:', formData);
alert('Registrasi berhasil! Silakan login.');
navigate('/login');
} catch (error) {
console.error('Register error:', error);
} finally {
setLoading(false);
}
};
return (
<div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700 p-4 sm:p-7">
<div className="p-4 sm:p-7">
<h2 Class="block text-2xl font-bold text-gray-800 dark:text-white text-center">Register</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label Class="block text-sm mb-2 dark:text-white">Nama:</label>
<input
type="text"
name="name"
Class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
value={formData.name}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label Class="block text-sm mb-2 dark:text-white">Email:</label>
<input
type="email"
name="email"
Class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
value={formData.email}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label Class="block text-sm mb-2 dark:text-white">Password:</label>
<input
type="password"
name="password"
Class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
value={formData.password}
onChange={handleChange}
required
/>
</div>
<div className="form-group">
<label Class="block text-sm mb-2 dark:text-white">Konfirmasi Password:</label>
<input
type="password"
name="confirmPassword"
Class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
value={formData.confirmPassword}
onChange={handleChange}
required
/>
</div>
<button type="submit" disabled={loading} class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
{loading ? 'Loading...' : 'Register'}
</button>
</form>
<p class="mt-2 text-sm text-gray-600 dark:text-neutral-400 text-center">
Sudah punya akun? <Link class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" to="/login">Login di sini</Link>
</p>
</div>
</div>
);
};
export default Register;