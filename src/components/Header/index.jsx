import React from 'react';
import './Header.module.css';
import Menu from '../Menu/index.jsx';
import Title from '../Title/index.jsx';
import Hamburger from '../Hamburger/index.jsx';
import styles from './Header.module.css';
import { MenuContextProvider } from '../../contexts/MenuContext';

export default function Header({title}) {
    
    return (
        // Para añadir clases se usa className, porque class es una palabra reservada de javascript.
        <header>
            <Title title={title} />
            <MenuContextProvider>
                <Hamburger />
                <Menu />
            </MenuContextProvider>
        </header>
    )
}