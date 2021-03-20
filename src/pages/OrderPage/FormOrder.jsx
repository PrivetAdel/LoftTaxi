import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FormControlLabel, Radio, RadioGroup, Grid, Select, MenuItem} from '@material-ui/core';
import {FormContainer, Form, SubmitButton} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {addAddresses} from '../../redux/actions';
// import carBusinnes from '../../assets/car-business.png';
// import carPremium from '../../assets/car-premium.png';
// import carStandard from '../../assets/car-standard.png';

const useStyles = makeStyles((theme) => ({
  label: {
    marginTop: theme.spacing(3)
  },
  smallGrid: {
    maxWidth: '50%'
  },
  longGrid: {
    flexGrow: 1
  }
}));

const FormOrder = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [carClass, setCarClass] = React.useState('standard');
  const [address1, setAddress1] = React.useState('откуда');
  const [address2, setAddress2] = React.useState('куда');
  const addressList = useSelector(({orderReducer}) => orderReducer.addresses);

  const changeClassHandler = (evt) => {
    setCarClass(evt.target.value);
  };
  
  const address1ChangeHandler = (evt) => {
    setAddress1(evt.target.value);
  };

  const address2ChangeHandler = (evt) => {
    setAddress2(evt.target.value);
  };

  const getRouteHandler = useCallback((address1, address2) => {
    dispatch(addAddresses(address1, address2));
  }, []);

  const submitHandler = (evt) => {
    evt.preventDefault();
    getRouteHandler(address1, address2);
  };

  return (
    <FormContainer maxWidth="xs"  padding="5">
      <Form onSubmitHandler={submitHandler}>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid container item xs={12} sm={6} spacing={2}>
            <Grid item className={classes.longGrid}>
              <Select
                labelId="address1"
                id="address1"
                value={address1}
                onChange={address1ChangeHandler}
              >
                {
                  addressList.map((address, index) => <MenuItem key={`${address}_${index}`} value={address}>{address}</MenuItem>)
                }
              </Select>
            </Grid>

            <Grid item className={classes.longGrid}>
              <Select
                labelId="address2"
                id="address2"
                value={address2}
                onChange={address2ChangeHandler}
              >
                {
                  addressList.filter(address => address !== `${address1}`).map((address, index) => <MenuItem key={`${address}_${index}`} value={address}>{address}</MenuItem>)
                }
              </Select>
            </Grid>
          </Grid>

          <FormContainer maxWidth="xs"  padding="5">
            <Grid container item className={classes.longGrid} spacing={2}>
              <RadioGroup aria-label="carClass" name="carClass" value={carClass} onChange={changeClassHandler} >
                <FormControlLabel value="standard" control={<Radio />} label="standard" />
                <FormControlLabel value="premium" control={<Radio />} label="premium" />
                <FormControlLabel value="business" control={<Radio />} label="business" />
              </RadioGroup>
            </Grid>

            <Grid container item className={classes.smallGrid}>
              <SubmitButton>Заказать</SubmitButton>
            </Grid>
          </FormContainer>
        </Grid>
      </Form>
    </FormContainer>
  );
};

export default FormOrder;
