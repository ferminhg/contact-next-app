import Footer from '../components/footer'
import Header from '../components/header'
import WipMessage from '../components/wipMessage'
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
