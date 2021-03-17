import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Link, useRouteMatch} from 'react-router-dom';
import {FormContainer} from '../../components';
import {loftTaxiTheme} from '../../loftTaxiTheme';

const useStyles = makeStyles((loftTaxiTheme) => ({
  link: {
    borderRadius: '70px', 
    padding: '9px 30px',
    fontSize: '24px',
    backgroundColor: '#fdbf5a'
    // margin: theme.spacing(6, 0, 4)
  }
}));

const FormProfileEmpty = () => {
  const {path} = useRouteMatch();
  const classes = useStyles(loftTaxiTheme);

  return (
    <FormContainer maxWidth="md"  padding="5">
      <Typography align="center" variant="h5">
        Для заказа такси заполните платёжные данные.
      </Typography>
      <Link to={`${path}/profile`} className={classes.link}>Перейти в профиль</Link>
    </FormContainer>
  );
};

export default FormProfileEmpty;