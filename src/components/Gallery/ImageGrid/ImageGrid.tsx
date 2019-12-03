import { GridList, GridListTile, makeStyles } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import * as React from 'react';

import bench from '../../../assets/bench.jpg';
import box from '../../../assets/box.jpg';
import cad from '../../../assets/cad-drawing.jpg';
import circlerailing from '../../../assets/circlerailing.jpg';
import circlerailing2 from '../../../assets/circlerailing2.jpg';
import crmclose from '../../../assets/crmclose.jpg';
import embrace from '../../../assets/embrace.jpg';
import gate from '../../../assets/gate.jpg';
import insideStairs from '../../../assets/inside-stairs.jpg';
import outsideGate from '../../../assets/outside-gate.jpg';
import outsideRailing from '../../../assets/outside-railing.jpg';
import outsideStairs from '../../../assets/outside-stairs.jpg';
import pool_railing from '../../../assets/pool_railing.jpg';
import pool_railing2 from '../../../assets/pool_railing2.jpg';
import railingfar from '../../../assets/railingfaraway.jpg';
import saleclose from '../../../assets/saleclose.jpg';
import stairs from '../../../assets/stairs.jpg';
import supportBeam from '../../../assets/support-beams.jpg';
import table1 from '../../../assets/table1.jpg';
import table2 from '../../../assets/table2.jpg';
import timberlake from '../../../assets/timberlake.jpg';

const useStyles = makeStyles({
  gridList: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    overflow: 'hidden'
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
    cols: 7,
    title: 'Stairs'
  },
  {
    img: bench,
    cols: 12,
    title: 'Bench'
  },
  {
    img: insideStairs,
    cols: 16,
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
    cols: 16,
    title: 'Supports Beams'
  },
  {
    img: box,
    cols: 20,
    title: 'Box'
  },
  {
    img: cad,
    cols: 20,
    title: 'Cad Drawing'
  },
  {
    img: circlerailing,
    cols: 8,
    title: 'Circle Railing'
  },
  {
    img: circlerailing2,
    cols: 8,
    title: 'Circle Railing 2'
  },
  {
    img: crmclose,
    cols: 20,
    title: 'Close up bench'
  },
  {
    img: embrace,
    cols: 20,
    title: 'Embrace Bench'
  },
  {
    img: saleclose,
    cols: 20,
    title: ''
  },
  {
    img: table1,
    cols: 20,
    title: ''
  },
  {
    img: table2,
    cols: 20,
    title: ''
  },
  {
    img: timberlake,
    cols: 20,
    title: ''
  }
];

export const ImageGrid = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 768px)');

  return (
    <GridList cellHeight="auto" className={classes.gridList} cols={24}>
      {tileData.map(tile => (
        <GridListTile key={tile.img} cols={matches ? 24 : tile.cols || 1}>
          <img src={tile.img} alt={tile.title} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default ImageGrid;
