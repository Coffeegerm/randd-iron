import React from 'react';
import { Grid, Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { dispatchSetCurrentComponent } from './Sidebar.redux';

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  dispatchSetCurrentComponent
};

type ISidebarProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export class SidebarC extends React.PureComponent<ISidebarProps> {
  public render(): JSX.Element {
    return (
      <Grid container direction="column" justify="center" alignItems="center" className="sidebar">
        <h2 onClick={this.handleClick(0)} className="sidebarLink">
          R and D Iron
        </h2>
        <Divider />
        <h4 onClick={this.handleClick(1)} className="sidebarLink">
          About Us
        </h4>
        <h4 onClick={this.handleClick(2)} className="sidebarLink">
          Contact Us
        </h4>
      </Grid>
    );
  }

  private handleClick = (id: number) => (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    this.props.dispatchSetCurrentComponent(id);
  };
}

export const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarC);
