import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getOrder} from '../../redux/actions';
import {FormContainer} from '../../components';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  }
}));

const FormProfileSave = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const newOrderHandler = useCallback((email, password) => {
    dispatch(getOrder(false));
  }, []);

  return (
    <FormContainer maxWidth="md"  padding="5">
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Заказ размещен
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </Typography>
      <button onClick={newOrderHandler}>Сделать новый заказ</button>
    </FormContainer>
  );
};

export default FormProfileSave;