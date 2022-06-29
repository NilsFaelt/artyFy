import { useState } from 'react'
import Header from './components/header/Header'
import Menu from './components/Menu/Menu'



function App() {
  const[toogleMenu, setToogleMenu] = useState(false)
  const openCloseMenu = () => {
    setToogleMenu(prevToogleMenu=> !prevToogleMenu)
    console.log(toogleMenu)
  }


  return (
    <div className="App">
      <Header title="ArtyFy" fn={openCloseMenu}/>
      <Menu toogleMenu={toogleMenu} />
    </div>
  )
}

export default App
