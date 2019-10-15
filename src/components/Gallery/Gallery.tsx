import * as React from 'react';

import { ImageGrid } from './ImageGrid/ImageGrid';
import { Bar } from '../Bar/Bar';

export const Gallery = () => {
  return (
    <div>
      <Bar />
      <ImageGrid />
    </div>
  );
};
