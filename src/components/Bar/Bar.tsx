import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
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
    color: 'white',
    textDecoration: 'none'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export const Bar = () => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Link className={styles.link} to="/">
          <Typography variant="h6" className={styles.headerTitle}>
            R & D Iron
          </Typography>
        </Link>

        <Button className={styles.button}>
          <Link className={styles.link} to="/gallery">
            Gallery
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
