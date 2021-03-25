import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '70px', 
    padding: theme.spacing(1, 4),
    fontSize: '1.6rem',
    margin: theme.spacing(4, 0)
  }
}));

const SubmitButton = ({children}) => {
  const classes = useStyles();

  return (
    <Button 
      fullWidth
      type="submit" 
      variant="contained" 
      color="primary" 
      className={classes.root}
    >
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default SubmitButton;
