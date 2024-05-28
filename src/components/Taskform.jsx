import { useState, useContext } from 'react'
import { Taskcontext } from '../context/Taskcontext'

export default function Taskform() {
  const { createTask } = useContext(Taskcontext)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const handleChangeTitle = e => setTitle(e.target.value)
  const handleChangeDescription = e => setDescription(e.target.value)
  const handleSubmit = e => {
    e.preventDefault()
    createTask(title, description)
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Añadir Tarea</h1>
      <input type="text" id='1' placeholder="titulo" value={title} onChange={handleChangeTitle} autoFocus /><br />
      <textarea id='2' placeholder="descripcion" value={description} onChange={handleChangeDescription}></textarea>
      <br /><button>Añadir</button>
    </form>
  )
}
