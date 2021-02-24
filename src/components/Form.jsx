import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  }
}));

export const Form = ({children, onSubmitHandler, ...props}) => {
  const classes = useStyles();

  return (
    <form 
      className={classes.root}
      onSubmit={onSubmitHandler}
      {...props}
    >
      {children}
    </form>
  );
};
 