import React from 'react';
import './App.css';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

export default class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <ImageCarousel />
      </div>
    );
  }
}
