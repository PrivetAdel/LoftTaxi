import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Container, Button} from '@material-ui/core';
import {Overlay} from '../../components';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 20px',
    padding: theme.spacing(7, 2, 4),
    zIndex: 2,
    pointerEvents: 'all',
    maxWidth: '80%',

    [theme.breakpoints.up('tablet')]: {
      margin: 0,
      padding: theme.spacing(7, 6, 4),
    },

    [theme.breakpoints.up('laptop')]: {
      maxWidth: '50%',
    }
  },
  text: {
    fontSize: '1.2rem',

    [theme.breakpoints.up('tablet')]: {
      fontSize: '1.6rem',
    }
  },
  button: {
    borderRadius: '70px', 
    padding: '9px 30px',
    fontSize: '1rem',
    margin: theme.spacing(4, 0),

    [theme.breakpoints.up('tablet')]: {
      fontSize: '1.6rem',
    }
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
      
      <Container className={classes.root} >
        <Typography align="center" variant="h5" className={classes.text} >
          Для заказа такси заполните платёжные&nbsp;данные
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