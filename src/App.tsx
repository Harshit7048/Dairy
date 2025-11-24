

import './App.css'
import Add from './Components/Add'
import Logo from './Components/Logo'
import Nav from './Components/Nav'
import Home from './Pages/Home'

function App() {


  return (
    <>
      <div className='app-main'>
        <Logo />
        <Home />
        <Add />
        <Nav />
      </div>
    </>
  )
}

export default App
