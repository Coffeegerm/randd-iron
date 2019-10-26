import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import { Contact } from './Contact/Contact';
import pool_railing2 from '../../assets/pool_railing2.jpg';
import { About } from './About/About';

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    background: `url(${pool_railing2})`,
    height: '100%',
    width: '100%'
  },
  columns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '85vh'
  },
  column: {
    width: '50%'
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center'
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
        <div className={styles.column}>
          <div className={styles.left}>
            <Typography className={styles.typography}>Custom</Typography>
            <Typography className={styles.typography}>Ornamental</Typography>
            <Typography className={styles.typography}>Welding</Typography>
          </div>
        </div>
        <div className={styles.column}>
          <Contact />
        </div>
      </div>
      <About />
    </div>
  );
};
