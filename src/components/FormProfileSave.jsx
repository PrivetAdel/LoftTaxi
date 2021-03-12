import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import {FormContainer} from './FormContainer';
import {SubmitButton} from './SubmitButton';
import {Form} from './Form';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
  smallGrid: {
    maxWidth: '70%'
  }
}));

const FormProfileSave = () => {
  const classes = useStyles();

  const submitHandler = (evt) => {
    evt.preventDefault();
    return (<Redirect to="/" />)
  };

  return (
    <FormContainer maxWidth="md"  padding="5">
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Профиль
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </Typography>
      <Form onSubmitHandler={submitHandler}>
        <Grid container justify="center">
          <Grid item className={classes.smallGrid}>
            <SubmitButton>Перейти на карту</SubmitButton>
          </Grid>
        </Grid>
      </Form>
    </FormContainer>
  );
};

export default FormProfileSave;
