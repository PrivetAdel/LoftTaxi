import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: '70px', 
    padding: '9px 0',
    fontSize: '24px',
    margin: theme.spacing(6, 0, 4)
  }
}));

export const SubmitButton = ({children}) => {
  const classes = useStyles();

  return (
    <Button 
      type="submit" 
      variant="contained" 
      color="primary" 
      className={classes.root} 
      fullWidth
    >
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired
};