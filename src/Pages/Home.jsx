import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontex';
const Home = () => {
const { isAuthenticated, user } = useAuth();
return (
<div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-2xs dark:bg-neutral-900 dark:border-neutral-700 p-4 sm:p-7">
<h1 Class="block text-2xl font-bold text-gray-800 dark:text-white text-center">Welcome to EduWawasan</h1>
{isAuthenticated ? (
<div>
<p>Hello, {user?.name}!</p>
<Link to="/dashboard">Go to Dashboard</Link>
</div>
) : (
<div class="text-center">
<p class="block text-sm mb-2 dark:text-white">Eduwawasan adalah platform berbagi ilmu di mana pengguna dapat saling membagikan materi pembelajaran, catatan, dan sumber belajar lainnya. Website ini dirancang sebagai ruang kolaboratif untuk saling mendukung dalam proses belajar-mengajar. Dengan fitur unggah dan unduh materi, diskusi antar pengguna, serta kategori materi yang terstruktur, Eduwawasan menjadi tempat yang tepat untuk memperluas wawasan dan memperdalam pemahaman bersama.</p>
<br />
<p Class="block text-sm mb-2 dark:text-white">Please login to access your dashboard</p>
<Link class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" to="/login">Login</Link> | <Link class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500" to="/register">Register</Link>
</div>
)}
</div>
);
};
export default Home;