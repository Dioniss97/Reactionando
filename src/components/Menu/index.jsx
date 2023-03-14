import React, {useEffect, useState} from 'react';
import './Menu.module.css';

export default function Menu() {

    return (
        // Para añadir clases se usa className, porque class es una palabra reservada de javascript.
        <nav>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>
    )
}