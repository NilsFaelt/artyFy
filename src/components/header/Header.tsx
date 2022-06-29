import React from 'react'
import Styles from './header.module.css'
import { MenuIcon }  from '@heroicons/react/outline'
import { Link } from 'react-router-dom';


interface Props{
    title:string;
    fn:()=>void;
    titleClick:()=>void
}

const Header:React.FC<Props> =  ({title, fn, titleClick}) => {
  return (
    <header className={Styles.container} >
      <Link onClick={titleClick} className='link' to={'/'}>
         <h1 className={Styles.title}> {title}</h1> 
      </Link>
      <MenuIcon onClick={fn} className={Styles.burger}/>
   
    </header>
  )
}

export default Header