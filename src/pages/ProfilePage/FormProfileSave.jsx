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
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
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

const FormProfileSave = () => {
  const classes = useStyles();

  return (
    <>
      <Overlay />

      <Container maxWidth="sm" className={classes.root} >
        <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
          Профиль
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </Typography>
        <Button
          variant="contained" 
          color="primary" 
          className={classes.button}>
          <Link to="/main" className={classes.link}>Перейти на карту</Link>
        </Button>
      </Container>
    </>
  );
};

export default FormProfileSave;