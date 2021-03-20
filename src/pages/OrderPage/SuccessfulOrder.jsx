import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {FormContainer} from '../../components';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
  smallGrid: {
    maxWidth: '70%'
  },
  link: {
    borderRadius: '70px', 
    padding: '9px 30px',
    fontSize: '24px',
    margin: theme.spacing(6, 0, 4)
  }
}));

const FormProfileSave = () => {
  const classes = useStyles();

  return (
    <FormContainer maxWidth="md"  padding="5">
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Заказ размещен
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </Typography>
      <Link to="/main" className={classes.link}>Сделать новый заказ</Link>
    </FormContainer>
  );
};

export default FormProfileSave;