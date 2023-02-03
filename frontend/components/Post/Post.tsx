import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from './Post.module.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PendingIcon from '@mui/icons-material/Pending';
import IconButton from '@mui/material/IconButton';

export const Post: React.FC = () => {
  return (
    <Paper elevation={0} style={{padding: '25px', background: '#222222', margin: '20px'}}>
      <Typography variant="caption" color='#d7dfe6'>Дата</Typography>
      <Typography variant="h5" color='#d7dfe6' style={{cursor: 'pointer'}}>Заголовок, заголовков заголовкович </Typography>
      <Typography color='#d7dfe6' style={{margin: '20px 0px'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam corporis aliquid nobis excepturi modi nam illum, numquam cumque laboriosam consequatur soluta molestias quidem tempore cupiditate eius mollitia ea maxime.
      </Typography>
      {/* <Image /> */}
      <div style={{background: '#ed6b02', height:'400px'}}/>
      <div className={styles.social}>
        <div>
        <Typography variant="caption" color="#d7dfe6">1</Typography>
        <IconButton>
          <FavoriteIcon color='warning'/>  
        </IconButton>
        </div>
        <div>
          <Typography variant="caption" color="#d7dfe6">1</Typography>
          <IconButton>
            <PendingIcon color='warning'/>
          </IconButton>
        </div>
      </div>
    </Paper>
  )
}