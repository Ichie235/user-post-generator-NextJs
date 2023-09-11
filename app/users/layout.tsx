import type { Metadata } from 'next'
import styles from './styles.module.css'


export const metadata: Metadata = {
  title: 'Users',
  description: 'Users page',
}

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
    <nav>About NavBar</nav>
    <main className={styles.main}>
        {children}
    </main>
    </>
    )
  }
  