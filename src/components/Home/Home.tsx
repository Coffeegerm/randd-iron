import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Contact } from './Contact/Contact';
import { About } from './About/About';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  typography: {
    fontSize: '70px',
    color: 'white',
    fontFamily: 'BlastrickNormal',
    margin: '3px 0px'
  },
  mobileTypography: {
    fontSize: '45px',
    color: 'white',
    fontFamily: 'BlastrickNormal',
    margin: '3px 0px'
  }
});

export const Home: React.FC = () => {
  const styles = useStyles();

  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.container}>
      <Typography className={matches ? styles.mobileTypography : styles.typography}>
        Custom Ornamental Handrails
      </Typography>
      <Typography className={matches ? styles.mobileTypography : styles.typography}>Spiral Staircases</Typography>
      <Typography className={matches ? styles.mobileTypography : styles.typography}>Gates & More</Typography>

      <Contact />
    </div>
  );
};
