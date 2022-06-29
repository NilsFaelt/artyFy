import React from 'react'
import Styles from './header.module.css'
import { MenuIcon }  from '@heroicons/react/outline'
import { Link } from 'react-router-dom';


interface Props{
    title:string;
    fn:()=>void
}

const Header:React.FC<Props> =  ({title, fn}) => {
  return (
    <header className={Styles.container} >
      <Link className='link' to={'/'}>
         <h1 className={Styles.title}> {title}</h1> 
      </Link>
      <MenuIcon onClick={fn} className={Styles.burger}/>
   
    </header>
  )
}

export default Header