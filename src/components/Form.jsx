import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%'
  }
}));

const Form = ({children, onSubmitHandler}) => {
  const {handleSubmit} = useForm();
  const classes = useStyles();

  return (
    <form 
      className={classes.root}
      onSubmit={handleSubmit(onSubmitHandler)}
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
 