import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import { TileData } from '../models';

const useStyles = makeStyles({
  gridList: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    overflow: 'hidden'
  }
});

interface ImageGridProps {
  images: TileData[];
}

const ImageGrid = (props: ImageGridProps) => {
  const { gridList } = useStyles();
  const matches = useMediaQuery('(max-width: 768px)');

  const { images } = props;

  return (
    <GridList cellHeight="auto" className={gridList} cols={24}>
      {images.map(tile => (
        <GridListTile key={tile.img} cols={matches ? 24 : tile.cols || 1}>
          <img src={tile.img} alt={tile.title} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default ImageGrid;
