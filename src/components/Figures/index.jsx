import styles from './figures.module.css';

export default function Figures() {

    return (
        <div className={styles.Figures}>
            <div className={styles.figure}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="#006d6f" />
                </svg>
            </div>
            <div className={styles.figure}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path d="M 50 10 L 90 90 L 10 90 Z" fill="#006d6f" />
                </svg>

            </div>
            <div className={styles.figure}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path d="M 10 10 L 90 10 L 90 70 L 10 70 Z" fill="#006d6f" />
                </svg>
            </div>
            <div className={styles.figure}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path d="M 50 10 L 90 35 L 90 75 L 50 90 L 10 75 L 10 35 Z" fill="#006d6f" />
                </svg>
            </div>
            <div className={styles.figure}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="#006d6f" />
                </svg>
            </div>
            <div className={styles.figure}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path d="M 50 10 C 20 10, 10 40, 10 65 C 10 90, 35 90, 50 90 C 65 90, 90 90, 90 65 C 90 40, 80 10, 50 10 Z" fill="#006d6f" />
                </svg>
            </div>
            <div className={styles.figure}>
                <svg width="100" height="100" viewBox="0 0 100 100">
                    <path d="M 30 20 L 70 20 L 80 90 L 20 90 Z M 35 35 L 35 85 M 50 35 L 50 85 M 65 35 L 65 85" stroke="#006d6f" stroke-width="5" fill="none" />
                </svg>
            </div>
        </div>
    )
}