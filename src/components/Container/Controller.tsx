import React from 'react';
import { Bar } from './Bar/Bar';
import { Container, makeStyles } from '@material-ui/core';
import { Contact } from './Contact/Contact';
import { About } from './About/About';
import { Home } from './Home/Home';

const useStyles = makeStyles({
  container: {
    margin: '0 auto'
  }
});

export const Controller: React.FC = () => {
  const styles = useStyles();

  return (
    <div>
      <Bar />
      <Container className={styles.container} maxWidth="lg">
        <Home />
        <About />
        <Contact />
      </Container>
    </div>
  );
};
