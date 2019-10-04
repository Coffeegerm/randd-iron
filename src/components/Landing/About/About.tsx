import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: '20px'
  }
});

export const About: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Typography>We are a husband and wife owned business.</Typography>
      <Typography>With 20 years of experience</Typography>
    </div>
  );
};
