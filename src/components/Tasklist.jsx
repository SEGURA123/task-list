import Taskcard from './Taskcard'
import { useContext } from 'react'
import { Taskcontext } from '../context/Taskcontext'

export default function Tasklist() {
  const { tasks } = useContext(Taskcontext)
  if (tasks.length === 0) {
    return <h1>no hay tareas</h1>
  }

  return (
    <section className='grid grid-cols-4 gap-2'>
      {tasks.map(task => (
        <Taskcard key={task.id} task={task} />
      ))}
    </section>
  )
}
