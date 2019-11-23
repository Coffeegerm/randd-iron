import * as React from 'react';
import { GridList, GridListTile, makeStyles } from '@material-ui/core';

import gate from '../../../assets/gate.jpg';
import pool_railing from '../../../assets/pool_railing.jpg';
import pool_railing2 from '../../../assets/pool_railing2.jpg';
import stairs from '../../../assets/stairs.jpg';
import bench from '../../../assets/bench.jpg';
import insideStairs from '../../../assets/inside-stairs.jpg';
import outsideGate from '../../../assets/outside-gate.jpg';
import outsideRailing from '../../../assets/outside-railing.jpg';
import outsideStairs from '../../../assets/outside-stairs.jpg';
import supportBeam from '../../../assets/support-beams.jpg';

const useStyles = makeStyles({
  gridList: {
    display: 'flex',
    justifyContent: 'center'
  }
});

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
    cols: 5,
    title: 'Stairs'
  },
  {
    img: bench,
    cols: 5,
    title: 'Bench'
  },
  {
    img: insideStairs,
    cols: 6,
    title: 'Inside Stairs'
  },
  {
    img: outsideGate,
    cols: 11,
    title: 'Gate'
  },
  {
    img: outsideRailing,
    cols: 6,
    title: 'Railing'
  },
  {
    img: outsideStairs,
    cols: 8,
    title: 'Outside Stairs'
  },
  {
    img: supportBeam,
    cols: 8,
    title: 'Supports Beams'
  }
];

export const ImageGrid = () => {
  const classes = useStyles();
  return (
    <GridList cellHeight="auto" className={classes.gridList} cols={12}>
      {tileData.map(tile => (
        <GridListTile key={tile.img} cols={tile.cols || 1}>
          <img src={tile.img} alt={tile.title} />
        </GridListTile>
      ))}
    </GridList>
  );
};
