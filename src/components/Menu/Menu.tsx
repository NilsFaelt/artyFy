import { Link } from 'react-router-dom'
import Styles from './menu.module.css'


interface Props{
    toogleMenu:boolean
    closeMenu:()=> void
}

const Menu: React.FC<Props> = ({toogleMenu,closeMenu}) => {
  return (
    <nav className={toogleMenu? Styles.container:Styles.containerOpen}>
      <Link onClick={closeMenu} className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>Login</Link>
      <Link onClick={closeMenu} className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>About</Link>
      <Link onClick={closeMenu} className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>Contact</Link>
      <Link onClick={closeMenu} className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>Home</Link>
    </nav>
  )
}

export default Menu