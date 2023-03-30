import React, { useEffect, useContext, useState } from 'react';
import PlusMinusContext from '../../contexts/PlusMinusContext';
import styles from './Modal.module.css';

export default function Modal () {
    const { count, plusOrMinus } = useContext(PlusMinusContext);
    const [modalClass, setModalClass] = useState(styles.modalHide);

    useEffect(() => {
        if (count !== 0) {
            setModalClass(styles.modalShow);
            setTimeout(() => {
                setModalClass(styles.modalHide);
                console.log('timer');
            }, 500);
        }
    }, [ count, plusOrMinus]);

    return (
        <div className={modalClass} onClick={() => setModalClass(styles.modalHide)}>
            <div>
                <span>{plusOrMinus ? 'You added 1' : 'You subtracted 1'}</span>
                <br />
                <br />
                <span>Current: {count}</span>
            </div>
        </div>
    );
}