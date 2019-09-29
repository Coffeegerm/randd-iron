import React from 'react';
import { Toolbar, Typography, Button, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { DisplayItem } from '../../../common/models/display';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  headerTitle: {
    flexGrow: 1,
    fontFamily: 'BlastrickSpecial',
    fontSize: '48px'
  },
  appBar: {
    backgroundColor: '#333333'
  },
  button: {
    fontFamily: 'BlastrickNormal',
    marginRight: '10px',
    fontSize: '24px',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  floatLeft: {
    float: 'right'
  }
});

type BarProps = {
  updateScreen: (displayItem: DisplayItem) => void;
};

export const Bar = ({ updateScreen }: BarProps) => {
  const styles = useStyles();
  return (
    <AppBar position="static" className={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" className={styles.headerTitle}>
          R & D Iron
        </Typography>

        <div className={styles.floatLeft}>
          <Button color="inherit" className={styles.button} onClick={() => updateScreen(DisplayItem.About)}>
            About
          </Button>
          <Button color="inherit" className={styles.button} onClick={() => updateScreen(DisplayItem.Contact)}>
            Contact Us
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
