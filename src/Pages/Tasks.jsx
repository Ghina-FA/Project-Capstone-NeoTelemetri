import React, { useState } from 'react';
const Tasks = () => {
const [tasks, setTasks] = useState([
{ id: 1, title: 'Belajar React', completed: false },
{ id: 2, title: 'Implementasi Authentication', completed: true },
{ id: 3, title: 'Deploy Aplikasi', completed: false }
]);
const [newTask, setNewTask] = useState('');
const addTask = (e) => {
e.preventDefault();
if (newTask.trim()) {
setTasks([...tasks, {
id: Date.now(),
title: newTask,
completed: false
}]);
setNewTask('');
}
};
const toggleTask = (id) => {
setTasks(tasks.map(task =>
task.id === id ? { ...task, completed: !task.completed } : task
));
};
const deleteTask = (id) => {
setTasks(tasks.filter(task => task.id !== id));
};
return (
<div className="tasks-container">
<h1>My Tasks</h1>
<form onSubmit={addTask} className="add-task-form">
<input
type="text"
value={newTask}
onChange={(e) => setNewTask(e.target.value)}
placeholder="Add new task..."
className="task-input"
/>
<button type="submit">Add Task</button>
</form>
<div className="tasks-list">
{tasks.map(task => (
<div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
<span onClick={() => toggleTask(task.id)}>{task.title}</span>
<button onClick={() => deleteTask(task.id)} className="delete-btn">Delete</button>
</div>
))}
</div>
</div>
);
};
export default Tasks;