import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import {Route, Redirect, Link} from 'react-router-dom';
import {FormContainer} from './FormContainer';

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
  const [close, setClose] = React.useState(false);

  const onCloseClick = () => {
    setClose((state) => !state);
  }

  return (
    <>
      { 
        <Route>
          close ?
          <Redirect to="/main" /> :
          <FormContainer maxWidth="md"  padding="5">
            <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
              Профиль
            </Typography>
            <Typography align="center" variant="subtitle2" color="textSecondary">
              Платёжные данные обновлены. Теперь вы можете заказывать такси.
            </Typography>
            <Link onClick={onCloseClick} to="/main" className={classes.link}>Перейти на карту</Link>
          </FormContainer>
        </Route>
      }
    </>
  );
};

export default FormProfileSave;


{/* <Grid container justify="center">
          <Grid item className={classes.smallGrid}>
            <Link to="/main" className={classes.link}>Перейти на карту</Link>
          </Grid>
        </Grid> */}