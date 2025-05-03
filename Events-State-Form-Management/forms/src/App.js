import './App.css';
import { useState } from 'react';

const initialData = [
  {
    id: 1,
    description: 'Finish React homework',
    priority: 'High',
    done: false,
  },
  { id: 2, description: 'Grocery shopping', priority: 'Medium', done: true },
  {
    id: 3,
    description: 'Call the dentist to reschedule',
    priority: 'Low',
    done: false,
  },
  {
    id: 4,
    description: 'Clean the coding workspace',
    priority: 'Low',
    done: true,
  },
  {
    id: 5,
    description: 'Push code to GitHub repo',
    priority: 'High',
    done: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialData);

  // Function to toggle the 'done' status of a task
  const toggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks); // Update the state with the new tasks array
  };

  return (
    <div>
      {/* Pass tasks and toggleDone function as props */}
      <TaskList tasks={tasks} toggleDone={toggleDone} />
    </div>
  );
}

//
function TaskList({ tasks, toggleDone }) {
  return (
    <div className="tasklist">
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.description} - {item.priority}
            {/* If The Item is  */}
            {item.done ? 'Status: Done' : 'Status: Not Done'}
            <button onClick={() => toggleDone(item.id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
