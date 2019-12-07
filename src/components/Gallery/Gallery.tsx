import { makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';

import { benches, gates, misc, railings, stairsData } from './data';
import ImageGrid from './ImageGrid/ImageGrid';

const useStyles = makeStyles({
  header: {
    fontSize: '26px',
    color: 'white',
    textAlign: 'center',
    paddingTop: '12px'
  }
});

export const Gallery = () => {
  const { header } = useStyles();

  return (
    <div>
      <Typography className={header}>Railings</Typography>
      <ImageGrid images={railings} />
      <Typography className={header}>Benches</Typography>
      <ImageGrid images={benches} />
      <Typography className={header}>Stairs</Typography>
      <ImageGrid images={stairsData} />
      <Typography className={header}>Gates</Typography>
      <ImageGrid images={gates} />
      <Typography className={header}>Miscellaneous</Typography>
      <ImageGrid images={misc} />
    </div>
  );
};

export default Gallery;
