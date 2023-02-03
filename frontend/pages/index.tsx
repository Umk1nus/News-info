import Head from 'next/head'
import { Header } from '../components/Header/Header';
import { Post } from '../components/Post/Post';
import { Menu } from '../components/Menu/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>News Info</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/news-info.svg" />
      </Head>
      <Header/>
      <div>
        <Menu/>
        <div className="content container">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
        <div className="rigth-side"></div>
      </div>
    </div>
  )
}
