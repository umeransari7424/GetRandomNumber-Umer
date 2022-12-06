import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Shuffle from '../Components/Elements/Shuffle'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home() {
  return (
    <div>
      <Shuffle/>
    </div>
  )
}
