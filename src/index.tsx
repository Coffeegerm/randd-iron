import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App/App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import theme from './theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
