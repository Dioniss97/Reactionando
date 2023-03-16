import React, {useContext} from 'react';
import './Menu.module.css';
import Context from '../../contexts/MenuContext.jsx';

export default function Menu() {

    const [open] = useContext(Context);

    return (
        <nav className={open ? 'open' : ''}>
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Contact</a></li>
            </ul>
        </nav>
    )
}