import React, { PureComponent } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { emailRegex } from '../../../common/utils/constants';

type ContactState = {
  name: string;
  email: string;
  message: string;
};

export default class Contact extends PureComponent<{}, ContactState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField label="Name" variant="outlined" onChange={this.handleNameChange} value={this.state.name} />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={!this.verifyEmail}
            label="Email"
            variant="outlined"
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Message"
            variant="outlined"
            onChange={this.handleMessageChange}
            value={this.state.message}
          />
        </Grid>
        <Grid item xs={3}>
          <Button disabled={!this.verifyEmail}>Submit</Button>
        </Grid>
      </Grid>
    );
  }

  private handleNameChange = (event: any) => {
    this.setState({
      name: event.target.value
    });
  };

  private handleEmailChange = (event: any) => {
    this.setState({
      email: event.target.value
    });
  };

  private handleMessageChange = (event: any) => {
    this.setState({
      message: event.target.value
    });
    console.log(this.state);
  };

  private verifyEmail = (): boolean => {
    return emailRegex.test(this.state.email);
  };
}
