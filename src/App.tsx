

import './App.css'
import Add from './Components/Add'
import Logo from './Components/Logo'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import LibraryContextProvider from './Context/LibraryContext'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import FullDairyPage from './Pages/FullDairyPage'

function App() {


  return (
    <>
      <LibraryContextProvider>

        <div className='app-main'>
          <Logo />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/full-dairy/:currentId' element={<FullDairyPage />} />
          </Routes>
          {/* <Home /> */}
          <Add />
          {/* <Nav /> */}
        </div>
      </LibraryContextProvider>




    </>
  )
}

export default App
