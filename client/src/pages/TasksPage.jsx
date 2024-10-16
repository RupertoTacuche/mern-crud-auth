//import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useTasks } from "../context/TasksContext"
import TaskCard from '../components/TaskCard'
function TasksPage() {

  const {getTasks, tasks} = useTasks()

  useEffect(() => {
    getTasks() // Fetch tasks when the component mounts (useEffect)
  }, [])

  if(tasks.length === 0) return (<h1>No Tasks</h1>)
  
  //console.log(user)
  return <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
    {
      tasks.map(task => (
        <TaskCard task = {task} key={task._id}/>
      ))
    }
  </div>
}

export default TasksPage