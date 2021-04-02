import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getOrder} from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 2),
    position: 'absolute',
    top: theme.spacing(4),
    left: theme.spacing(2),
    alignItems: 'start',
    pointerEvents: 'all',
    width: '80%',
    maxWidth: '300px',

    [theme.breakpoints.up('tablet')]: {
      padding: theme.spacing(3, 4, 1),
      top: theme.spacing(2),
    }
  },
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
  button: {
    borderRadius: '70px', 
    padding: '9px 30px',
    fontSize: '0.9rem',
    margin: theme.spacing(2, 0),

    [theme.breakpoints.up('laptop')]: {
      fontSize: '1rem',
      margin: theme.spacing(4, 0),
    }
  }
}));

const FormProfileSave = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const newOrderHandler = useCallback(() => {
    dispatch(getOrder(false));
  }, []);

  return (
    <Container className={classes.root} >
      <Typography className={classes.title} variant="h5" data-testid="formTitle">
        Заказ размещен
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </Typography>
      <Button
        fullWidth
        variant="contained" 
        color="primary" 
        className={classes.button}
        onClick={newOrderHandler}>
        Сделать новый заказ
      </Button>
    </Container>
  );
};

export default FormProfileSave;