import * as React from 'react';
import { GridList, GridListTile, makeStyles } from '@material-ui/core';

import gate from '../../../assets/gate.jpg';
import pool_railing from '../../../assets/pool_railing.jpg';
import pool_railing2 from '../../../assets/pool_railing2.jpg';
import stairs from '../../../assets/stairs.jpg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    width: '100%',
    height: 450
  }
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
  {
    img: gate,
    cols: 10,
    title: 'Gate'
  },
  {
    img: pool_railing2,
    cols: 10,
    title: 'Pool Railing'
  },
  {
    img: pool_railing,
    cols: 10,
    title: 'Pool Railing'
  },
  {
    img: stairs,
    cols: 6,
    title: 'Stairs'
  }
];

export const ImageGrid = () => {
  const classes = useStyles();
  return (
    <div>
      <GridList cellHeight={160} className={classes.gridList} cols={12}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
