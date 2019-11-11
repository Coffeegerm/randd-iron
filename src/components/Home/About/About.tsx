import React from 'react';
import { Typography, makeStyles, AppBar } from '@material-ui/core';

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
  },
  typography: {
    textAlign: 'center'
  }
});

export const About: React.FC = () => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.container}>
      <Typography className={styles.typography}>
        With 20 years of experience and certifications in FCAW, MIG, and TIG welding we guarantee that whatever you
        want, we can make.
      </Typography>
    </AppBar>
  );
};
