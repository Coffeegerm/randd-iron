import React from 'react';
import { makeStyles, Typography, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  main: {
    minHeight: '200px',
    marginTop: '20px'
  },
  container: {
    paddingTop: '20px',
    paddingBottom: '20px'
  }
});

export const Home: React.FC = () => {
  const styles = useStyles();

  return (
    <Paper className={styles.main}>
      <Container className={styles.container}>
        <Typography>Custom Ornamental Welding</Typography>
      </Container>
    </Paper>
  );
};
