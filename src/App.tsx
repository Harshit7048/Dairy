

import './App.css'
import Add from './Components/Add'
import Logo from './Components/Logo'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import LibraryContextProvider from './Context/LibraryContext'

function App() {


  return (
    <>
      <LibraryContextProvider>

        <div className='app-main'>
          <Logo />
          <Home />
          <Add />
          <Nav />
        </div>
      </LibraryContextProvider>




    </>
  )
}

export default App
