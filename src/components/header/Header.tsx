import React from 'react'
import Styles from './header.module.css'
import { MenuIcon }  from '@heroicons/react/outline'

interface Props{
    title:string;
    fn:()=>void
}

const Header:React.FC<Props> =  ({title, fn}) => {
  return (
    <header className={Styles.container} >
      <h1 className={Styles.title}> {title}</h1> 
      <MenuIcon onClick={fn} className={Styles.burger}/>
    </header>
  )
}

export default Header