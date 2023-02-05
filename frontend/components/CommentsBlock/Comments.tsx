import React from 'react';
import styles from './CommentsBlock.module.scss'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Comment } from '../Comment/Comment';

export const CommentsBlock: React.FC = () => {
  return (
    <div className={styles.comments}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Typography color='#ed6b02' variant='h5'>Комментарии</Typography>
        <ArrowForwardIosIcon color='warning' style={{marginLeft: '10px'}}/>
      </div>
      <div className={styles.comments_items}>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </div>
  )
}