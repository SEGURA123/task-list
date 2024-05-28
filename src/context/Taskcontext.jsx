import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { tasks as data } from '../data/tasks'

export const Taskcontext = createContext()

export default function Taskcontextprovider({ children }) {
  const [tasks, setTasks] = useState([])
  const [id, setId] = useState(0)
  const [title, setTitle] = useState(0)
  const [description, setDescription] = useState(0)
  useEffect(() => {
    setTasks(data)
  }, [])
  useEffect(() => {
    tasks.map((task, i) => {task.id = i})
    if (tasks.length == 0) {
      setId(0)
      setTitle(0)
      setDescription(0)
    }
  }, [tasks])
  function createTask(taskTitle, taskDescription) {
    if (taskTitle === "") {
      taskTitle = `tarea ${title + 1}`
      setTitle(title + 1)
    }
    if (taskDescription === "") {
      taskDescription = `descripcion ${description + 1}`
      setDescription(description + 1)
    }
    setTasks([...tasks, {
      id,
      title: taskTitle,
      description: taskDescription
    }])
    setId(id + 1)
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
    if (taskId == tasks.length - 1) {
      setId(id - 1)
      setTitle(title - 1)
      setDescription(description - 1)
    }
  }
  
  return (
    <Taskcontext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
      {children}
    </Taskcontext.Provider>
  )
}
Taskcontextprovider.propTypes = {
  children: PropTypes.node
}