import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from './components/Header'
import Nav from './components/Nav'
import Homema from './homema/homema'

export default function Home() {
  return (
    <div className = {styles.container} > 
      <Header />
      <Nav />
      {/* <Header /> */}
      <div><a href="../homema/homema">팬 페이지 이동하기</a></div>
    </div>
  )
}
