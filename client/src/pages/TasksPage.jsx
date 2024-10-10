//import { useAuth } from "../context/AuthContext"

import { useTasks } from "../context/TasksContext"
import { useEffect } from "react"

function TasksPage() {

  const {getTasks, tasks} = useTasks()

  useEffect(() => {
    getTasks() // Fetch tasks when the component mounts (useEffect)
  }, [])

  if(tasks.length === 0) return (<h1>No Tasks</h1>)
  
  //console.log(user)
  return <div>
    {
      tasks.map(task => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))
    }
  </div>
}

export default TasksPage