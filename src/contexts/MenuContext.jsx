import React, {useState} from 'react'
import Menu from '../components/Menu/index.jsx'
import Hamburger from '../components/Hamburger/index.jsx'

const Context = React.createContext({})

export function MenuContextProvider ({children}) {

  const [open, setOpen] = useState(false)

  return <Context.Provider value={{open, setOpen}}>
    {children}
  </Context.Provider>
}

export default Context