import React from 'react';
import styles from './Menu.module.scss'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';

export const Menu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Button className={styles.menu__button}>
            <NewspaperIcon color='warning' style={{margin: '0 10px'}}/>
            <Typography color='#ed6b02' variant='caption'>Новости</Typography>
          </Button>
        </li>
        <li>
        <Button className={styles.menu__button}>
            <PeopleAltIcon color='warning' style={{margin: '0 10px'}}/>
            <Typography color='#ed6b02' variant='caption'>Подписки</Typography>
          </Button>
        </li>
        <li>
        <Button className={styles.menu__button}>
            <InfoIcon color='warning' style={{margin: '0 10px'}}/>
            <Typography color='#ed6b02' variant='caption' className=''>О проекте</Typography>
          </Button>
        </li>
      </ul>
    </div>
  )
}