import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import Home from './pages/singup'
import '../src/pages/pages.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mainbody' style={{ backgroundImage: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)' }}>
        <Login></Login>
      </div>
    </>
  )
}

export default App