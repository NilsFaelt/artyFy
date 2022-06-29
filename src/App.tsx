import { useState } from 'react'
import Header from './components/header/Header'
import Menu from './components/Menu/Menu'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/homeScreen/Home'
import Login from './components/login/Login'



function App() {
  const[toogleMenu, setToogleMenu] = useState(false)
  const openCloseMenu = () => {
    setToogleMenu(prevToogleMenu=> !prevToogleMenu)
    console.log(toogleMenu)
  }
  const closeMenu=()=>{
    setToogleMenu(true)
  }


  return (
    <div className="App">
      <Header title="ArtyFy" titleClick={closeMenu} fn={openCloseMenu}/>
      <Menu toogleMenu={toogleMenu} closeMenu={closeMenu} />
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={ <Login/>}/>
      </Routes>
    
   
    </div>
  )
}

export default App
