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

const Bar = () => {
  const { headerTitle, appBar, button, link, toolbar } = useStyles();
  return (
    <AppBar position="sticky" className={appBar}>
      <Toolbar className={toolbar}>
        <Link className={link} to="/">
          <Typography variant="h6" className={headerTitle}>
            R & D Iron
          </Typography>
        </Link>

        <Button className={button}>
          <Link className={link} to="/gallery">
            Gallery
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Bar;
