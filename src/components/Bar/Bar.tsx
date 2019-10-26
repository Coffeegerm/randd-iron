import React from 'react';
import { Toolbar, Typography, AppBar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  headerTitle: {
    flexGrow: 1,
    fontFamily: 'BlastrickSpecial',
    fontSize: '48px'
  },
  appBar: {
    backgroundColor: '#333333'
  },
  button: {
    color: 'white',
    fontFamily: 'BlastrickNormal',
    fontSize: '24px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  link: {
    color: 'white'
  }
});

export const Bar = () => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" className={styles.headerTitle}>
          R & D Iron
        </Typography>

        <Button className={styles.button}>
          <Link className={styles.link} to="/gallery">
            Gallery
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
