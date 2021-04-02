import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, NativeSelect, InputLabel, FormControl, FormHelperText} from '@material-ui/core';
import {SubmitButton} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {addAddresses} from '../../redux/actions';
import {useForm} from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: theme.spacing(5),
    left: theme.spacing(2),
    padding: theme.spacing(0),
    pointerEvents: 'all',
    maxWidth: '286px',

    [theme.breakpoints.up('tablet')]: {
      top: theme.spacing(2),
    }
  },
  form: {
    width: '100%'
  },
  controll: {
    marginTop: theme.spacing(2)
  },
  label: {
    color: theme.secondary,
    fontWeight: 300
  },
  inputBlock: {
    padding: theme.spacing(2, 2, 0),

    [theme.breakpoints.up('tablet')]: {
      padding: theme.spacing(3),
    }
  }
}));

const FormOrder = () => {
  const {register, handleSubmit, watch, errors} = useForm();
  const addressList = useSelector(({orderReducer}) => orderReducer.addresses);
  const dispatch = useDispatch();
  const classes = useStyles();

  const watchAddress1 = watch("address1");
  const watchAddress2 = watch("address2");

  const getRouteHandler = (data) => {
    const {address1, address2} = data;
    dispatch(addAddresses(address1, address2));
  };

  return (
    <Container className={classes.root} >
      <form data-testid="form" className={classes.form} onSubmit={handleSubmit(getRouteHandler)} >
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

          <SubmitButton>Заказать</SubmitButton>
        </Grid>
      </form>
    </Container>
  );
};

export default FormOrder;
