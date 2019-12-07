import { AppBar, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

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

const About: React.FC = () => {
  const { container, typography } = useStyles();
  return (
    <AppBar position="static" className={container}>
      <Typography className={typography}>
        With 20 years of experience and certifications in FCAW, MIG, and TIG welding we guarantee that whatever you
        want, we can make.
      </Typography>
    </AppBar>
  );
};

export default About;
