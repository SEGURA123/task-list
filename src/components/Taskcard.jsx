import PropTypes from 'prop-types'
import { useContext } from 'react'
import { Taskcontext } from '../context/Taskcontext'

export default function Taskcard({ task = {} }) {
  const { deleteTask } = useContext(Taskcontext)
  return (
    <article className='bg-gray-800 text-white'>
      <h1>{task.title}</h1>
      <h5>{task.description}</h5>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </article>
  )
}
Taskcard.propTypes = {
  task: PropTypes.object.isRequired
}
