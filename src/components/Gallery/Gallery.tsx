import { CloudinaryContext, Image } from 'cloudinary-react';
import React, { useEffect, useState } from 'react';

import { fetchPhotos } from '../../common/utils/cloudinary';

import './Gallery.css';

export const Gallery = () => {
  const [images, setImages] = useState(Array<any>());

  useEffect(() => {
    fetchPhotos('randdiron', setImages);
  }, []);

  return (
    <div className="container">
      <CloudinaryContext cloudName="coffeegerm">
        <div className="photos">
          {images.map(i => (
            <Image className="image" key={i} publicId={i} fetch-format="auto" quality="auto" width="600" />
          ))}
        </div>
      </CloudinaryContext>
    </div>
  );
};

export default Gallery;
