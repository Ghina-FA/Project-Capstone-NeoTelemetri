import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/Authcontex';
import ProtectedRoute from './Components/ProtectedRoute';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Tasks from './Pages/Tasks';
import Materi from './Pages/Materi';
import './App.css';

function App() {
return (
<AuthProvider>
<div className="App">
<Navbar />
<main>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/Materi" element={<Materi />} />
{/* Protected Routes */}
<Route path="/dashboard" element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
} />
<Route path="/profile" element={
<ProtectedRoute>
<Profile />
</ProtectedRoute>
} />
<Route path="/tasks" element={
<ProtectedRoute>
<Tasks />
</ProtectedRoute>
} />
</Routes>
</main>
</div>
</AuthProvider>
);
}
export default App;