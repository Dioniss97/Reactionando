import React, {useEffect, useRef, useContext} from 'react';
import styles from './Hamburger.module.css';
import MenuContext from '../../contexts/MenuContext.jsx';

export default function Hamburger() {

    const [open, setOpen] = useContext(MenuContext);
    const hamburgerRef = useRef(null);

    useEffect(() => {
        hamburgerRef.current.classList.toggle(styles.active, open);
    }, [open]);

    return (
        <div ref={hamburgerRef} className={styles.hamburger} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}