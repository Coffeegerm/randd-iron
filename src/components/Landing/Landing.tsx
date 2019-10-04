import React from 'react';
import { Bar } from './Bar/Bar';
import { Container, makeStyles } from '@material-ui/core';
import { Contact } from './Contact/Contact';
import { DisplayItem } from '../../common/models/display';
import { About } from './About/About';

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
    paddingTop: '20px'
  }
});

export const Landing: React.FC = () => {
  const styles = useStyles();
  const [currentItem, setCurrentItem] = React.useState({
    currentItem: DisplayItem.Home
  });

  const updateDisplay = (item: DisplayItem) => {
    setCurrentItem({
      currentItem: item
    });
  };

  return (
    <div>
      <Bar updateScreen={updateDisplay} />
      <Container className={styles.container} maxWidth="lg">
        {displayController(currentItem)}
      </Container>
    </div>
  );
};

const displayController = ({ currentItem }: { currentItem: DisplayItem }) => {
  switch (currentItem) {
    case DisplayItem.Home:
      return null;
    case DisplayItem.About:
      return <About />;
    case DisplayItem.Contact:
      return <Contact />;
  }
};
