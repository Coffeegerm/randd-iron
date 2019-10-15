import React from 'react';
import { Typography, makeStyles, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginBottom: '20px',
    marginTop: '20px',
    minHeight: '200px'
  },
  root: {
    textAlign: 'center',
    paddingTop: '20px',
    paddingBottom: '20px'
  }
});

export const About: React.FC = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.container}>
      <Container className={styles.root}>
        <Typography>We are a husband and wife owned business.</Typography>
        <Typography>With 20 years of experience</Typography>
      </Container>
    </Paper>
  );
};
