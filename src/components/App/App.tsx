import React from 'react';
import './App.css';

import { Landing } from '../Landing/Landing';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Landing />
      </div>
    );
  }
}
