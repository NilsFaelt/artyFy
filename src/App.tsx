import { useState } from "react";
import Header from "./components/header/Header";
import Menu from "./components/Menu/Menu";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/homeScreen/Home";
import Login from "./components/login/Login";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [toogleMenu, setToogleMenu] = useState<boolean>(true);
  const openCloseMenu = () => {
    setToogleMenu((prevToogleMenu) => !prevToogleMenu);
    console.log(toogleMenu);
  };
  const closeMenu = () => {
    setToogleMenu(true);
  };

  const [users, setUsers] = useState([
    {
      username: "Kilmanjaro",
      password: "lotus_55",
      email: "Kilmajaro@gmail.com",
      userImg:
        "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      upLoadedArt: [],
    },
    {
      username: "LowLife",
      password: "Lavida@99",
      email: "LowLifeo@gmail.com",
      userImg:
        "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      upLoadedArt: [],
    },
  ]);

  return (
    <div className='App'>
      <Header title='ArtyFy' titleClick={closeMenu} fn={openCloseMenu} />
      <Menu toogleMenu={toogleMenu} closeMenu={closeMenu} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login users={users} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
