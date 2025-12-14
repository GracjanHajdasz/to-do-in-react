export function Task({ tasks, deleteTask }) {

    return (
    <>
        {tasks.map((tasks) => (
          <div key={tasks.id} className="task">
            <input type="checkbox" />
            <span>{tasks.task}</span>
            <button onClick = {() => deleteTask(tasks.id)}>Delete</button>
          </div>
        ))}
    </>
  )
}