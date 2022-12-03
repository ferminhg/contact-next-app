import Footer from '../src/components/footer'
import Header from '../src/components/header'
import WipMessage from '../src/components/wipMessage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <main className={styles.main}>
          <WipMessage/>
      </main>
      <Footer/>
    </div>
  )
}
