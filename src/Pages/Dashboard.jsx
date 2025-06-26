import React from 'react';
import { useAuth } from '../Context/Authcontex';
const Dashboard = () => {
const { user } = useAuth();
return (
<div className="dashboard-container">
<h1>Dashboard</h1>
<p>Welcome to your dashboard, {user?.name}!</p>
<p>This is a protected page that only logged-in users can see.</p>
<div className="dashboard-content">
<h3>Quick Stats</h3>
<div className="stats-grid">
<div className="stat-card">
<h4>Total Users</h4>
<p>1,234</p>
</div>
<div className="stat-card">
<h4>Active Sessions</h4>
<p>56</p>
</div>
<div className="stat-card">
<h4>Revenue</h4>
<p>$12,345</p>
</div>
</div>
</div>
</div>
);
};
export default Dashboard;