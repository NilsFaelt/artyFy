import { Link } from 'react-router-dom'
import Styles from './menu.module.css'


interface Props{
    toogleMenu:boolean
}

const Menu: React.FC<Props> = ({toogleMenu}) => {
  return (
    <nav className={toogleMenu? Styles.container:Styles.containerOpen}>
      <Link className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>Login</Link>
      <Link className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>About</Link>
      <Link className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>Contact</Link>
      <Link className={ toogleMenu? Styles.link: Styles.linkOpen} to={'/login'}>Home</Link>
    </nav>
  )
}

export default Menu