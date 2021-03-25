import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    width: '100%', 
    height: 'calc(100vh - 77px)', 
    zIndex: '1', 
    background: 'rgba(0, 0, 0, 0.5)', 
    pointerEvents: 'all'
  }
});

const Overlay = () => {
  const classes = useStyles();

  return (
    <div data-testid="overlay" className={classes.root}></div>
  );
};

export default Overlay;
