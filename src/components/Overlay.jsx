import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100vh', 
    zIndex: '1', 
    background: 'rgba(0, 0, 0, 0.5)', 
    pointerEvents: 'all',

    [theme.breakpoints.up('tablet')]: {
      height: 'calc(100vh - 77px)'
    }
  }
}));

const Overlay = () => {
  const classes = useStyles();

  return (
    <div data-testid="overlay" className={classes.root}></div>
  );
};

export default Overlay;
