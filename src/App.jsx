
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <div>
      <header>

        <Navbar />
        <Outlet />

      </header>
    </div>
  )
}

export default App
