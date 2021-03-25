import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Container, Button} from '@material-ui/core';
import {Overlay} from '../../components';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(7, 6, 4),
    zIndex: 2,
    pointerEvents: 'all'
  },
  button: {
    borderRadius: '70px', 
    padding: '9px 30px',
    fontSize: '24px',
    margin: theme.spacing(4, 0)
  },
  link: {
    color: 'black',
    textDecoration: 'none'
  }
}));

const FormProfileEmpty = () => {
  const classes = useStyles();

  return (
    <>
      <Overlay />
      
      <Container maxWidth="md" className={classes.root} >
        <Typography align="center" variant="h5">
          Для заказа такси заполните платёжные данные
        </Typography>
        <Button
          variant="contained" 
          color="primary" 
          className={classes.button}>
          <Link to="/main/profile" className={classes.link}>Перейти в профиль</Link>
        </Button>
      </Container>
    </>
  );
};

export default FormProfileEmpty;