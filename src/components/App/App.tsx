import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Home } from '../Home/Home';
import { Router, Route, Switch } from 'react-router-dom';
import { Gallery } from '../Gallery/Gallery';
import { History } from '../../common/utils/history';
import { Bar } from '../Bar/Bar';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(45deg, #8b0000 40%, #9e4f00 90%)'
  }
});

export const App: React.FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <Router history={History}>
        <Bar />
        <Switch>
          <Route path="/gallery" component={Gallery} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};
