import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/Header'
import Nav from './components/Nav'

export default function Home() {
  return (
    <div className = {styles.container} > 
      Hello<br />
      <Link href="/post/post.js">
        click this~
      </Link>
      <Header />
      <Nav />
    </div>
  )
}
