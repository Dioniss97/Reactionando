import React, {useEffect, useState} from 'react';
import styles from './Title.module.css';

export default function Title({title}) {

    // const [title, setTitle] = useState(['Home']);

    return (
        <div className={styles.title}>
            <h1>{title}</h1>
        </div>
    )
}