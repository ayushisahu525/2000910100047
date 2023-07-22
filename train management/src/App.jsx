import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Train from './components/Train';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Train />
    </>
  )
}

export default App
