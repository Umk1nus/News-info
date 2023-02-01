import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import styles from './Header.module.scss';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import CreateIcon from '@mui/icons-material/Create';
import Button from '@mui/material/Button';
import PendingIcon from '@mui/icons-material/Pending';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { padding } from '@mui/system';



export const Header: React.FC = () => {
  return (
    <Paper classes={{root: styles.root}} elevation={0}>
      <div className={styles.info}>
        <IconButton>
          <MenuIcon color='warning'/>
        </IconButton>
        <Typography style={{margin: '0px 15px', color: '#ed6c02'}}>LOGO</Typography>
        <TextField
          color='warning'
          focused
          size='small'
          InputProps={{ 
            startAdornment: (
              <InputAdornment position="start">
                <SavedSearchIcon color='warning'/>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button color='warning' variant="contained"><CreateIcon color='disabled'/></Button>
              </InputAdornment>
            ),
            style: {
              paddingRight: '0px'
            }
          }}
          placeholder='Search'
        />
      </div>
      <div className={styles.profile}>
        <IconButton>
          <PendingIcon color='warning'/>
        </IconButton>
        <IconButton>
          <NotificationsIcon color='warning'/>
        </IconButton>
        <Avatar src='https://sun7-15.userapi.com/s/v1/ig2/kBVB-JJbaLxNw4lZLic4EKdtBiUnuTYhXfSexjwN51TLlowzuqLR1XCJUUNT3Mpfj23HyVbvYtATS5tXmfD-xaLx.jpg?size=50x50&quality=95&crop=0,0,767,767&ava=1' variant="rounded" style={{marginLeft: '15px'}}/>
      </div>
    </Paper>
  )
}
