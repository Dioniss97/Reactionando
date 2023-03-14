import React, {useEffect, useState} from 'react';
import './Header.module.css';
import Menu from '../Menu/index.jsx';
import Title from '../Title/index.jsx';
import Hamburger from '../Hamburger/index.jsx';
import styles from './Header.module.css';

export default function Header() {
    
    return (
        // Para añadir clases se usa className, porque class es una palabra reservada de javascript.
        <header>
            <Hamburger />
            <Title />
            <Menu />
        </header>
    )
}