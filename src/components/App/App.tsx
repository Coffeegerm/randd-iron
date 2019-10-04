import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Landing } from '../Landing/Landing';

const useStyles = makeStyles({
  app: {
    height: '100vp',
    width: '100vw'
  }
});

export const App: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <Landing />
    </div>
  );
};
