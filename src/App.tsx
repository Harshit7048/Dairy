

import './App.css'
import Add from './Components/Add'
import Logo from './Components/Logo'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import { LibrabryContextProvider } from './Context/LibraryContext'

function App() {


  return (
    <>
      <LibrabryContextProvider>

        <div className='app-main'>
          <Logo />
          <Home />
          <Add />
          <Nav />
        </div>
      </LibrabryContextProvider>

    </>
  )
}

export default App
