import React from 'react';
import { Bar } from './Bar/Bar';
import './Landing.css';
import { Container, makeStyles } from '@material-ui/core';
import Contact from './Contact/Contact';
import { DisplayItem } from '../../common/models/display';
import About from './About/About';
import './Landing.css';

type LandingState = {
  currentItem: DisplayItem;
};
export class Landing extends React.PureComponent<{}, LandingState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentItem: DisplayItem.Home
    };
  }
  public render(): JSX.Element {
    return (
      <div>
        <Bar updateScreen={this.updateDisplay} />
        <Container className="container" maxWidth="lg">
          {this.displayController()}
        </Container>
      </div>
    );
  }

  private updateDisplay = (component: DisplayItem) => {
    this.setState({ currentItem: component });
  };

  private displayController = () => {
    switch (this.state.currentItem) {
      case DisplayItem.Home:
        return null;
      case DisplayItem.About:
        return <About />;
      case DisplayItem.Contact:
        return <Contact />;
    }
  };
}
