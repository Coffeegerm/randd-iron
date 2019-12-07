import { makeStyles } from '@material-ui/core';
import React from 'react';
import ReactGA from 'react-ga';
import { Route, Router, Switch } from 'react-router-dom';

import History from '../../common/utils/history';
import Bar from '../Bar/Bar';
import Gallery from '../Gallery/Gallery';
import Home from '../Home/Home';

const useStyles = makeStyles({
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(70deg, #121212 50%, #595959 90%)'
  }
});

export const App: React.FC = () => {
  const { app } = useStyles();
  return (
    <Router history={History}>
      <div className={app}>
        <Bar />
        <Switch>
          <Route path="/gallery" component={Gallery} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};
