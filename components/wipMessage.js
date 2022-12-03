import Image from 'next/image'
import styles from '../styles/Home.module.css'

const WipMessage = () => {
    return (
        <div className={styles.grid}>
            <div className={styles.grid}>
                <h1 className={styles.title}>
                    Welcome 👋
                </h1>
            </div>
            
            <div className={styles.grid}>
                <Image
                src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy-downsized-large.gif"
                alt="Waiting"
                width={480}
                height={335}
                />
            </div>
        </div>
    )
}

export default WipMessage