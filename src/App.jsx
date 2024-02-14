import { useState } from 'react'
import './App.css'
import { Kanban } from './Kanban'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Kanban/>
    </>
  )
}

export default App
