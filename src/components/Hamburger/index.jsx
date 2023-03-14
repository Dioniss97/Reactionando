import React, {useEffect, useState, useRef} from 'react';
import styles from './Hamburger.module.css';

export default function Hamburger() {

    const [open, setOpen] = useState(false);
    const hamburgerRef = useRef(null);

    const toggleActive = () => {
        setOpen(!open);
    }

    useEffect(() => {
        hamburgerRef.current.classList.toggle(styles.active, open);
    }, [open]);

    return (
        <div ref={hamburgerRef} className={styles.hamburger} onClick={toggleActive}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}