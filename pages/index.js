import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🎟 Event app</title>
        <meta name="description" content="Event app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome 👋
        </h1>
        
        <div className={styles.grid}>
          <Image
            src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy-downsized-large.gif"
            alt="Waiting"
            width={480}
            height={335}
          />
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by ❤️ 
      </footer>
    </div>
  )
}
