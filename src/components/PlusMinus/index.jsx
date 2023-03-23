import React, { useState, useEffect } from 'react'
import styles from './PlusMinus.module.css'

export default function PlusMinus () {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
        console.log('count', count)
    }, [count])
    
    return (
        <div className={styles.PlusMinusContainer}>
            <div>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div>
                <span>{count}</span>
            </div>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    )
}