import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  }
}));

const Form = ({children, onSubmitHandler}) => {
  const classes = useStyles();

  return (
    <form 
      className={classes.root}
      onSubmit={onSubmitHandler}
      data-testid="form"
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmitHandler: PropTypes.func.isRequired
};

export default Form;
 