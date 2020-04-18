import { Button } from '@material-ui/core';
import { CloudinaryContext } from 'cloudinary-react';
import React from 'react';

import { openUploadWidget } from '../../common/utils/cloudinary';

import './Upload.css';

function Upload() {
  const beginUpload = () => {
    const uploadOptions = {
      cloudName: 'coffeegerm',
      tags: ['randdiron'],
      uploadPreset: 'upload'
    };
    openUploadWidget(uploadOptions, (error: any, photos: any) => {});
  };

  return (
    <CloudinaryContext cloudName="coffeegerm">
      <div className="container">
        <Button color="primary" onClick={() => beginUpload()}>
          Upload Image
        </Button>
      </div>
    </CloudinaryContext>
  );
}

export default Upload;
