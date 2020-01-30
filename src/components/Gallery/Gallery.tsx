import { makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';

import { benches, gates, misc, railings, stairsData } from './data';
import ImageGrid from './ImageGrid/ImageGrid';
import { TileData } from './models';

const useStyles = makeStyles({
  header: {
    fontSize: '26px',
    color: 'white',
    textAlign: 'center',
    paddingTop: '12px'
  }
});

const grids = [
  {
    title: 'Benches',
    images: benches
  },
  {
    title: 'Gates',
    images: gates
  },
  {
    title: 'Railings',
    images: railings
  },
  {
    title: 'Stairs',
    images: stairsData
  },
  {
    title: 'Miscellaneous',
    images: misc
  }
];

export const Gallery = () => {
  const { header } = useStyles();

  const createImageGrid = (title: string, images: TileData[]) => (
    <>
      <Typography className={header}>{title}</Typography>
      <ImageGrid images={images} />
    </>
  );

  return <>{grids.map(({ title, images }) => createImageGrid(title, images))}</>;
};

export default Gallery;
