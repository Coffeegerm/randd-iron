import React from 'react';
import { Sidebar } from './Sidebar/Sidebar';
import { Grid } from '@material-ui/core';

export class Landing extends React.PureComponent {
  public render(): JSX.Element {
    return (
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}></Grid>
      </Grid>
    );
  }
}
