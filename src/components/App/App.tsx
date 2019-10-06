import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Controller } from '../Container/Controller';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#A9A9A9'
  }
});

export const App: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <Controller />
    </div>
  );
};
