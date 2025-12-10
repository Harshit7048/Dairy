

import './App.css'
import Add from './Components/Add'
import Logo from './Components/Logo'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import LibraryContextProvider from './Context/LibraryContext'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import FullDairyPage from './Pages/FullDairyPage'
import AddTodo from './Components/AddTodo'
import UserLogin from './Components/UserLogin'
import UserBaseContextProvider from './Context/UserBaseContextProvider'
import DateContextProvider from './Context/DateContextProvider'
import CreateDairy from './Components/CreateDiary'

function App() {


  return (
    <>
      <UserBaseContextProvider>
        <DateContextProvider>
          <LibraryContextProvider>

            <div className='app-main'>
              <Logo />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<Add />} />
                <Route path='/login_user' element={<UserLogin />} />
                <Route path='/add-todo' element={<AddTodo />} />
                <Route path='/add-dairy' element={<CreateDairy />} />
                <Route path='/full-dairy/:currentId' element={<FullDairyPage />} />

              </Routes>
              {/* <Home /> */}

              <Nav />
            </div>
          </LibraryContextProvider>
        </DateContextProvider>
      </UserBaseContextProvider>





    </>
  )
}

export default App
