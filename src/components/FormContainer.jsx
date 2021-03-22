import React from 'react';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {loftTaxiTheme} from '../loftTaxiTheme';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: loftTaxiTheme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    padding: props => props.padding,
    backgroundColor: '#fff'
  }
}));

const FormContainer = ({children, maxWidth, padding}) => {
  const classes = useStyles({padding});

  return (
    <Container 
      className={classes.root}
      data-testid="container"
      maxWidth={maxWidth}
    >
      {children}
    </Container>
  );
}; 

FormContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default FormContainer;