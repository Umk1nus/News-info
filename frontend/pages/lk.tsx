
import Head from 'next/head'
import { Header } from '../components/Header/Header';
import Avatar from '@mui/material/Avatar';
import { Post } from '../components/Post/Post';
import { Menu } from '../components/Menu/Menu';
import Typography from '@mui/material/Typography';
import { CommentsBlock } from '../components/CommentsBlock/Comments';
import Button from '@mui/material/Button';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Пользователь</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/news-info.svg" />
      </Head>
      <Header/>
      <div className='flex-column'>
        <Avatar src='https://sun7-15.userapi.com/s/v1/ig2/kBVB-JJbaLxNw4lZLic4EKdtBiUnuTYhXfSexjwN51TLlowzuqLR1XCJUUNT3Mpfj23HyVbvYtATS5tXmfD-xaLx.jpg?size=50x50&quality=95&crop=0,0,767,767&ava=1' variant="rounded" style={{marginLeft: '15px', height: '150px', width: '150px'}}/>
        <Typography variant="h4" color="initial">Имя Фамилия</Typography>
        <div className='flex'>
          <Button color='warning' variant="contained">Написать</Button>
          <Button color='warning' variant="contained">Редактировать</Button>
        </div>
        <div className='flex-column'>
          <Typography variant="caption" color="initial">Друзья</Typography>
          <div className="flex">
          <Avatar src='https://sun7-15.userapi.com/s/v1/ig2/kBVB-JJbaLxNw4lZLic4EKdtBiUnuTYhXfSexjwN51TLlowzuqLR1XCJUUNT3Mpfj23HyVbvYtATS5tXmfD-xaLx.jpg?size=50x50&quality=95&crop=0,0,767,767&ava=1' variant="rounded" style={{marginLeft: '15px', height: '50px', width: '50px'}}/>
          <Avatar src='https://sun7-15.userapi.com/s/v1/ig2/kBVB-JJbaLxNw4lZLic4EKdtBiUnuTYhXfSexjwN51TLlowzuqLR1XCJUUNT3Mpfj23HyVbvYtATS5tXmfD-xaLx.jpg?size=50x50&quality=95&crop=0,0,767,767&ava=1' variant="rounded" style={{marginLeft: '15px', height: '50px', width: '50px'}}/>
          <Avatar src='https://sun7-15.userapi.com/s/v1/ig2/kBVB-JJbaLxNw4lZLic4EKdtBiUnuTYhXfSexjwN51TLlowzuqLR1XCJUUNT3Mpfj23HyVbvYtATS5tXmfD-xaLx.jpg?size=50x50&quality=95&crop=0,0,767,767&ava=1' variant="rounded" style={{marginLeft: '15px', height: '50px', width: '50px'}}/>
          <Avatar src='https://sun7-15.userapi.com/s/v1/ig2/kBVB-JJbaLxNw4lZLic4EKdtBiUnuTYhXfSexjwN51TLlowzuqLR1XCJUUNT3Mpfj23HyVbvYtATS5tXmfD-xaLx.jpg?size=50x50&quality=95&crop=0,0,767,767&ava=1' variant="rounded" style={{marginLeft: '15px', height: '50px', width: '50px'}}/>
          </div>
        </div>
      </div>
    </div>
  )
}