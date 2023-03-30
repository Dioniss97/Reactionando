import React, { useEffect, useContext } from 'react'
import PlusMinusContext from '../../contexts/PlusMinusContext'
import styles from './PlusMinus.module.css'

export default function PlusMinus () {
    const {count, setCount} = useContext(PlusMinusContext)
    const {plusOrMinus, setPlusOrMinus} = useContext(PlusMinusContext)

    useEffect(() => {
        console.log('count', count)
        console.log('plusOrMinus', plusOrMinus)
    }, [count, plusOrMinus])

    return (
        <div className={styles.PlusMinusContainer}>
            <div onClick={() => {
                setCount(count - 1);
                setPlusOrMinus(false)
            }}>
                <button>-</button>
            </div>
            <div>
                <span>{count}</span>
            </div>
            <div onClick={() => {
                setCount(count + 1);
                setPlusOrMinus(true)
            }}>
                <button>+</button>
            </div>
        </div>
    )
}