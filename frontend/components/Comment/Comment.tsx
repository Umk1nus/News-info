import React from 'react';
import styles from './Comment.module.scss'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';
import Paper from '@mui/material/Paper';
import Face3Icon from '@mui/icons-material/Face3';


export const Comment: React.FC = () => {
  return (
    <Paper elevation={0} className={styles.comment}>
      <div className={styles.comment__name}>
        <Face3Icon color='warning'/>
        <Typography variant="overline" color="#ed6b02" style={{marginLeft: '10px'}} fontWeight={600}>Пудж пуджов</Typography>
      </div>
      <Typography variant="caption" color="#ed6b02">Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio minima beatae numquam ipsum, autem repellat recusandae deserunt! Fugit, quo? Ea reiciendis eveniet praesentium eligendi doloribus illo dolorem soluta cupiditate.</Typography>
    </Paper>
  )
}