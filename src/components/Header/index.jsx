import React from 'react';
import './Header.module.css';
import Menu from '../Menu/index.jsx';
import Title from '../Title/index.jsx';
import Hamburger from '../Hamburger/index.jsx';
import styles from './Header.module.css';
import { MenuContextProvider } from '../../contexts/MenuContext.jsx';

export default function Header({title}) {

    return (
        <header className={styles.header}>
            <Title title={title} />
            <MenuContextProvider>
                <Hamburger />
                <Menu />
            </MenuContextProvider>
        </header>
    )
}