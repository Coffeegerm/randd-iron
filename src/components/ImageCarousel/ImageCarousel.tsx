import React from 'react';
import pool_railing from '../../assets/pool_railing.jpg';
import pool_railing2 from '../../assets/pool_railing2.jpg';
import gate from '../../assets/gate.jpg';
import stairs from '../../assets/stairs.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class ImageCarousel extends React.PureComponent {
  render() {
    return (
      <div>
        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
          <img src={pool_railing} />
          <img src={pool_railing2} />
          <img src={gate} />
          <img src={stairs} />
        </Carousel>
      </div>
    );
  }
}
