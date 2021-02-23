import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    boxSizing: 'border-box',
    width: '40%',
    backgroundColor: 'white',
    margin: '0 auto',
    padding: '55px 112px',
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px'
  },
  title: {
    marginBottom: '57px',
    fontWeight: 700
  }
});

const Form = ({children, title, onSubmitHandler}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h4" className={classes.title}>{title}</Typography>
      <form onSubmit={onSubmitHandler}>
        <Grid container spacing={3} >
          {children}
        </Grid>
      </form>
    </div>
  );
};

export default Form;