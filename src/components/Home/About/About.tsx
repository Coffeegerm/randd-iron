import React from 'react';
import { Typography, makeStyles, Container, Paper, AppBar } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    minHeight: '100px',
    backgroundColor: '#111111',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center'
  }
});

export const About: React.FC = () => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.container}>
      <Typography>
        With 20 years of experience and certifications in ___ and ___ we guarantee that whatever you want, we can make.
      </Typography>
    </AppBar>
  );
};
