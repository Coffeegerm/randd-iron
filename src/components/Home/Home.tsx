import React from 'react';
import { Bar } from '../Bar/Bar';
import { Container, makeStyles } from '@material-ui/core';
import { Contact } from './Contact/Contact';
import { About } from './About/About';

const useStyles = makeStyles({
  container: {
    margin: '0 auto'
  }
});

export const Home: React.FC = () => {
  const styles = useStyles();

  return (
    <div>
      <Bar />
      <Container className={styles.container} maxWidth="lg">
        <Contact />
        <About />
      </Container>
    </div>
  );
};
