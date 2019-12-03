import { makeStyles } from '@material-ui/core';
import React from 'react';
import ReactGA from 'react-ga';
import { Route, Router, Switch } from 'react-router-dom';

import { History } from '../../common/utils/history';
import { Bar } from '../Bar/Bar';
import { Gallery } from '../Gallery/Gallery';
import { Home } from '../Home/Home';

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
  const initReactGA = () => {
    ReactGA.initialize('UA-153850385-1');
    ReactGA.pageview('');
  };
  return (
    <div className={styles.app}>
      {initReactGA()}
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
