import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import MenuContext from '../../contexts/MenuContext'
import styles from './Menu.module.css'

export default function Menu () {
  const { open, setOpen } = useContext(MenuContext)
  const menuClass = open ? `${styles.menu} ${styles.active}` : `${styles.menu}`

  return (
    <div className={menuClass}>
      <nav>
        <ul>
          <li><Link to='/admin' onClick={() => setOpen(!open)}>Inicio</Link></li>
          <li><Link to='/admin/usuarios' onClick={() => setOpen(!open)}>Usuarios</Link></li>
          <li><Link to='/admin/clientes' onClick={() => setOpen(!open)}>Clientes</Link></li>
          <li><Link to='/admin/emails' onClick={() => setOpen(!open)}>Emails</Link></li>
        </ul>
      </nav>
    </div>
  )
}