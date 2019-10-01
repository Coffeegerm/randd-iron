import * as React from 'react';
import { TextField, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { sendEmail } from '../../../common/utils/email';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '20px',
    alignItems: 'center'
  },
  message: {
    flexGrow: 1
  }
});

export const Contact: React.FC = () => {
  const styles = useStyles();

  const [information, setValues] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const updateValue = (e: any) => {
    setValues({
      ...information,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Grid container spacing={2} className={styles.root}>
      <Typography>
        Need something custom made for a doorway, by the pool, or just want something to liven up your outside or inside
        area?
      </Typography>
      <Typography>
        Send us an email with some information about what you'd like or any questions that you might have and we'll get
        back to you as soon as possible so that we can get you just what you would like!
      </Typography>
      <Grid item xs={6}>
        <TextField label="Name" name="name" variant="outlined" onChange={updateValue} value={information.name} />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Email" name="email" variant="outlined" onChange={updateValue} value={information.email} />
      </Grid>
      <Grid item xs={12}>
        <TextField
          className={styles.message}
          label="Message"
          name="message"
          variant="outlined"
          onChange={updateValue}
          value={information.message}
        />
      </Grid>
      <Grid item xs={3}>
        <Button onClick={() => sendEmail(information.name, information.email, information.message)}>Submit</Button>
      </Grid>
    </Grid>
  );
};
