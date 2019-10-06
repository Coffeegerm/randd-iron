import React from 'react';
import { Toolbar, Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    fontFamily: 'BlastrickNormal',
    marginRight: '10px',
    fontSize: '24px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  floatLeft: {
    float: 'right'
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
      </Toolbar>
    </AppBar>
  );
};
