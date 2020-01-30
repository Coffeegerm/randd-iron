import { makeStyles, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React from 'react';

import Contact from './Contact/Contact';

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

const Home = () => {
  const { container, typography, mobileTypography } = useStyles();

  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <div className={container}>
      <Typography className={matches ? mobileTypography : typography}>Custom Ornamental Handrails</Typography>
      <Typography className={matches ? mobileTypography : typography}>Spiral Staircases</Typography>
      <Typography className={matches ? mobileTypography : typography}>Gates & More</Typography>

      <Contact />
    </div>
  );
};

export default Home;
