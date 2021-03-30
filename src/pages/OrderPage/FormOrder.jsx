import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, FormControlLabel, Radio, RadioGroup, Grid, NativeSelect, InputLabel, FormControl, FormHelperText} from '@material-ui/core';
import {SubmitButton} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {addAddresses} from '../../redux/actions';
import {useForm} from 'react-hook-form';
// import carBusinnes from '../../assets/car-business.png';
// import carPremium from '../../assets/car-premium.png';
// import carStandard from '../../assets/car-standard.png';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
    padding: theme.spacing(0),
    pointerEvents: 'all'
  },
  controll: {
    marginTop: theme.spacing(2)
  },
  label: {
    color: theme.secondary,
    fontWeight: 300
  },
  inputBlock: {
    padding: theme.spacing(3)
  },
  smallGrid: {
    maxWidth: '50%'
  },
  longGrid: {
    flexGrow: 1
  }
}));

const FormOrder = () => {
  const [carClass, setCarClass] = React.useState('standard');
  const {register, handleSubmit, watch, errors} = useForm();
  const addressList = useSelector(({orderReducer}) => orderReducer.addresses);
  const dispatch = useDispatch();
  const classes = useStyles();

  const watchAddress1 = watch("address1");
  const watchAddress2 = watch("address2");

  const changeClassHandler = (evt) => {
    setCarClass(evt.target.value);
  };

  const getRouteHandler = (data) => {
    const {address1, address2} = data;
    dispatch(addAddresses(address1, address2));
  };

  return (
    <Container maxWidth="xs" className={classes.root} >
      <form data-testid="form" className={classes.form} onSubmit={handleSubmit(getRouteHandler)} >
        <Grid container direction="row" justify="center">
          <Grid container direction="column" className={classes.inputBlock} >
            <FormControl>
              <InputLabel htmlFor="address1" className={classes.label}>Откуда</InputLabel>
              <NativeSelect
                id="address1"
                name="address1"
                inputProps={{"data-testid": "select"}}
                inputRef={register({required: true})}
                error={errors.password ? true : false}
              >
                <option value="" />
                {
                  addressList.filter(address => address !== watchAddress2).map((address, index) => <option key={`${address}_${index}`} value={address}>{address}</option>)
                }
              </NativeSelect>
              {errors.password && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}
            </FormControl>

            <FormControl className={classes.controll}>
              <InputLabel htmlFor="address2" className={classes.label}>Куда</InputLabel>
              <NativeSelect
                id="address2"
                name="address2"
                inputRef={register({required: true})}
                error={errors.password ? true : false}
              >
                <option value="" />
                {
                  addressList.filter(address => address !== watchAddress1).map((address, index) => <option key={`${address}_${index}`} value={address}>{address}</option>)
                }
              </NativeSelect>
              {errors.password && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}
            </FormControl>
          </Grid>

          <Container maxWidth="xs" >
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
          </Container>
        </Grid>
      </form>
    </Container>
  );
};

export default FormOrder;
