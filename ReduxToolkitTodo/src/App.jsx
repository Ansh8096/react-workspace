import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-slate-600 text-center text-5xl text-black p-4'>Redux toolkit todo</div>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
