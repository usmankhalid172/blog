import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
          </main>
  )
}

const User = ()=>{
  return(
    <div>
      <h2>My Name is Usman</h2>
    </div>
  )
}
