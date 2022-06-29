import Styles from './menu.module.css'


interface Props{
    toogleMenu:boolean
}

const Menu: React.FC<Props> = ({toogleMenu}) => {
  return (
    <nav className={toogleMenu? Styles.container:Styles.containerOpen}></nav>
  )
}

export default Menu