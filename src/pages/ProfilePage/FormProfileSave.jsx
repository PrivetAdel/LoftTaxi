import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {FormContainer} from '../../components';
import {loftTaxiTheme} from '../../loftTaxiTheme';

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 700,
    margin: loftTaxiTheme.spacing(1, 0, 2)
  },
  smallGrid: {
    maxWidth: '70%'
  },
  link: {
    borderRadius: '70px', 
    padding: '9px 30px',
    fontSize: '24px',
    margin: loftTaxiTheme.spacing(6, 0, 4)
  }
}));

const FormProfileSave = () => {
  const classes = useStyles();

  return (
    <FormContainer maxWidth="md"  padding="5">
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Профиль
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        Платёжные данные обновлены. Теперь вы можете заказывать такси.
      </Typography>
      <Link to="/main" className={classes.MuiButton}>Перейти на карту</Link>
    </FormContainer>
  );
};

export default FormProfileSave;