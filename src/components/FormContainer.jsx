import React from 'react';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    padding: theme.spacing(8, 12)
  }
}));

export const FormContainer = ({children}) => {
  const classes = useStyles();

  return (
    <Container 
      className={classes.root}
      data-testid="container"
      maxWidth="sm"
    >
      {children}
    </Container>
  );
}; 

FormContainer.propTypes = {
  children: PropTypes.node.isRequired
};