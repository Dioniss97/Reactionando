import { useContext } from 'react'
import MenuContext from '../../contexts/MenuContext'
import styles from './Hamburger.module.css'

export default function HamburgerButton () {
  const { open, setOpen } = useContext(MenuContext)
  const hamburgerClass = open ? `${styles.hamburgerButton} ${styles.active}` : `${styles.hamburgerButton}`

  return (
    <div className={hamburgerClass} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}