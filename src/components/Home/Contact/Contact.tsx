import * as React from 'react';
import { TextField, Button, Container, makeStyles, Typography, Paper } from '@material-ui/core';
import { sendEmail } from '../../../common/utils/email';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marign: '20px 0px',
    padding: '20px 15px'
  },
  header: {
    fontSize: '30px',
    justifyContent: 'center',
    marginLeft: '20px'
  },
  button: {
    margin: '10px 0',
    fontSize: '16px'
  },
  phone: {
    textDecoration: 'none',
    color: 'black',
    margin: '10px 0px'
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
    const { name, value } = e.target;
    setValues({
      ...information,
      [name]: value
    });
  };

  return (
    <Container maxWidth="md">
      <Paper>
        <div className={styles.root}>
          <Typography className={styles.header}>Get in touch!</Typography>
          <TextField label="Name" name="name" onChange={updateValue} value={information.name} />
          <TextField label="Email" name="email" onChange={updateValue} value={information.email} />
          <TextField label="Message" name="message" onChange={updateValue} value={information.message} multiline />
          <Button
            className={styles.button}
            onClick={() => sendEmail(information.name, information.email, information.message)}
          >
            Send
          </Button>
          <Typography>You can also reach us at:</Typography>
          <Typography>
            <a href="tell:5405199781" className={styles.phone}>
              (540) 519-9781
            </a>
          </Typography>
          <Typography>RAndDIron@gmail.com</Typography>
        </div>
      </Paper>
    </Container>
  );
};
