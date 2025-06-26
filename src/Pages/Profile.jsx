import React from 'react';
import { useAuth } from '../Context/Authcontex';
const Profile = () => {
const { user } = useAuth();
return (
<div className="profile-container">
<h1 Class="block text-2xl font-bold text-gray-800 dark:text-white text-center">User Profile</h1>
<div className="profile-info">
<p class="block text-sm mb-2 dark:text-white"><strong>Name:</strong> {user?.name}</p>
<p class="block text-sm mb-2 dark:text-white"><strong>Email:</strong> {user?.email}</p>
<p class="block text-sm mb-2 dark:text-white"><strong>ID:</strong> {user?.id}</p>
<p class="block text-sm mb-2 dark:text-white"><strong>Status:</strong> Active</p>
</div>
<div className="profile-actions">
<button className="btn-secondary">Edit Profile</button>
<button className="btn-secondary">Change Password</button>
</div>
</div>
);
};
export default Profile;