import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Contact } from './Contact/Contact';
import pool_railing2 from '../../assets/pool_railing2.jpg';
import { About } from './About/About';

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    width: '100vw'
  },
  columns: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: 10 % 0,
    alignItems: 'center'
  },
  typography: {
    fontSize: '70px',
    color: 'white',
    fontFamily: 'BlastrickNormal',
    margin: '3px 0px'
  }
});

export const Home: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.columns}>
        <Typography className={styles.typography}>Custom Ornamental Handrails</Typography>
        <Typography className={styles.typography}>Spiral Staircases</Typography>
        <Typography className={styles.typography}>Gates & More</Typography>

        <Contact />
      </div>
      <About />
    </div>
  );
};
