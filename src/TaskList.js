import React from 'react';
import './styles.css';
const TaskList = () => {
  const tasks = [
    { id: 1, text: 'Task 1', day: 'July 17th at 2:00pm', reminder: true },
    { id: 2, text: 'Task 2', day: 'July 18th at 10:00am', reminder: false },
  ];

  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks to show</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <h3>{task.text}</h3>
              <p>{task.day}</p>
              <p>{task.reminder ? 'Reminder set' : 'No reminder'}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
