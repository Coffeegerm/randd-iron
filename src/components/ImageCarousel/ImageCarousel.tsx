import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class ImageCarousel extends React.PureComponent {
  render() {
    return (
      <div>
        <Carousel>
          <div>
            <img src="assets/pool_railing2.jpg" />
            <p>Poolside Railing</p>
          </div>
          <div>
            <img src="assets/pool_railing.jpg" />
          </div>
          <div>
            <img src="gate.jpg" />
          </div>
          <div>
            <img src="assets/stairs.jpg" />
          </div>
        </Carousel>
      </div>
    );
  }
}
