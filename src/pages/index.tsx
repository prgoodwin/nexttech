import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './navbar'
import Article from './article'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <Article />
    </>
  )
}
