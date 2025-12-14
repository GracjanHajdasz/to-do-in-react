import './Task.css';

export function Task({ tasks, deleteTask }) {

    return (
    <div className='tasks-container'>
        {tasks.map((tasks) => (
          <div key={tasks.id} className="task">
            <input type="checkbox" />
            <span>{tasks.task}</span>
            <button onClick = {() => deleteTask(tasks.id)}>Delete</button>
          </div>
        ))}
    </div>
  )
}