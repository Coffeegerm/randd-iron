import * as React from 'react';
import { TextField, Button, Container, Grid, makeStyles, Typography, Paper } from '@material-ui/core';
import { sendEmail } from '../../../common/utils/email';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    marginTop: '20px',
    padding: '20px 0'
  },
  container: {
    margin: '20px 0'
  },
  header: {
    fontSize: '24px',
    justifyContent: 'center',
    marginLeft: '20px'
  },
  message: {
    width: '100%',
    margin: '10px 20px'
  },
  textField: {
    width: '100%',
    margin: '10px 20px'
  },
  button: {
    marginTop: '10px',
    marginLeft: '15px'
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
    <Container maxWidth="md" className={styles.container}>
      <Paper>
        <Grid container spacing={2} className={styles.root}>
          <Typography className={styles.header}>Get in touch!</Typography>
          <TextField
            label="Name"
            name="name"
            onChange={updateValue}
            value={information.name}
            className={styles.textField}
          />
          <TextField
            label="Email"
            name="email"
            onChange={updateValue}
            value={information.email}
            className={styles.textField}
          />
          <TextField
            className={styles.message}
            label="Message"
            name="message"
            onChange={updateValue}
            value={information.message}
            multiline
          />
          <Button
            className={styles.button}
            onClick={() => sendEmail(information.name, information.email, information.message)}
          >
            Send
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};
