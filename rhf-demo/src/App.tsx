import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { YouTubeForm } from "./components/YouTubeForm.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <YouTubeForm></YouTubeForm>
    </>
  )
}

export default App
