import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography, InputLabel, Input, Grid, FormHelperText} from '@material-ui/core';
import {DatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DayjsUtils from '@date-io/dayjs';
import {SubmitButton, Overlay} from '../../components';
import {useDispatch} from 'react-redux';
import {saveCardData} from '../../redux/actions';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import logoPic from '../../assets/logo-pic.svg';
import chip from '../../assets/chip.svg';
import masterCard from '../../assets/master-card-logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 5),
    zIndex: 2,
    pointerEvents: 'all',
    maxWidth: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 0,

    [theme.breakpoints.up('tablet')]: {
      padding: theme.spacing(3, 8),
      maxWidth: '80%',
      borderRadius: '20px',
      margin: '20px 0',
      height: 'auto',
    },

    [theme.breakpoints.up('laptop')]: {
      maxWidth: '50%',
    }
  },
  form: {
    width: '100%',
  },
  formBody: {
    order: 2,

    [theme.breakpoints.up('tablet')]: {
      order: 0,
    },
  },
  title: {
    display: 'none',

    [theme.breakpoints.up('tablet')]: {
      display: 'block',
      fontWeight: 700,
      margin: theme.spacing(1, 0),
    },
  },
  label: {
    marginTop: theme.spacing(1)
  },
  card: {
    padding: theme.spacing(2, 3),
    marginTop: theme.spacing(3),
  },
  data: {
    '& input': {
      textAlign: 'end',
      fontSize: '0.9rem',
      outline: 'none',
    }
  },
  number: {
    border: 'none',
    fontSize: '1rem',
    color: 'black',
    outline: 'none',
    margin: 0
  },
  smallGrid: {
    maxWidth: '50%'
  },
  longGrid: {
    flexGrow: 1
  }
}));

const maskNumber = (number) => {
  return number
    .replace(/\D/gi, '')
    .replace(/(.{4})/g, '$1 ')
    .replace(/(?<=.{19})(.*)/g, '')
};

const maskCvc = (cvc) => {
  return cvc
    .replace(/\D/gi, '')
    .replace(/(?<=.{3})(.*)/g, '')
};

const transformDate = (date) => {
  return date
    .replace(/^(.{3})(.*)/gm, '$2, $1')
    .replace(/^(.{2})/gm, '20$1')
    .replace(/\//gm, '')
    .split(', ')
};

const FormProfile = ({cardData}) => {
  const {register, handleSubmit, watch, setValue, errors} = useForm();
  const [date, setDate] = React.useState(`${cardData.expiryDate ? new Date(transformDate(cardData.expiryDate)) : new Date()}`);
  const dispatch = useDispatch();
  const classes = useStyles();

  const watchCardNumber = watch("cardNumber");

  const saveCardDataHandler = (data) => {
    const {cardName, cardNumber, expiryDate, cvc} = data;
    dispatch(saveCardData(cardName, cardNumber, expiryDate, cvc));
  };

  return (
    <>
      <Overlay />
      
      <Container className={classes.root} >
        <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
          Профиль
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Введите платежные данные
        </Typography>
        <form data-testid="form" className={classes.form} onSubmit={handleSubmit(saveCardDataHandler)}>
          <Grid container justify="center" spacing={2}>
            <Grid container direction="row" justify="space-between" spacing={5}>
              <Grid className={classes.formBody}  container item xs={12} sm={6} spacing={2}>
                <Grid item className={classes.longGrid}>
                  <InputLabel htmlFor="cardName" className={classes.label} >Имя владельца</InputLabel>
                  <Input
                    fullWidth
                    type="text"
                    id="cardName"
                    name="cardName"
                    placeholder="Loft"
                    defaultValue={cardData.cardName}
                    inputRef={register({required: true})}
                    error={!!errors.cardName} />
                  {errors.cardName && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}
                </Grid>

                <Grid item className={classes.longGrid}>
                  <InputLabel htmlFor="cardNumber" className={classes.label} >Номер карты</InputLabel>
                  <Input
                    fullWidth
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    defaultValue={cardData.cardNumber}
                    inputRef={register({required: true, minLength: 19})}
                    onChange={(evt) => setValue("cardNumber", maskNumber(evt.target.value))}
                    error={!!errors.cardNumber} />
                  {errors.cardNumber && errors.cardNumber.type === "required" && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}
                  {errors.cardNumber && errors.cardNumber.type === "minLength" && <FormHelperText>Номер карты состоит из 16 цифр</FormHelperText>}
                </Grid>

                <Grid container item className={classes.longGrid} spacing={2} >
                  <Grid item className={classes.smallGrid}>
                    <InputLabel htmlFor="expiryDate" className={classes.label} >MM/YY</InputLabel>
                    <MuiPickersUtilsProvider utils={DayjsUtils}>
                      <DatePicker
                        id="expiryDate"
                        name="expiryDate"
                        format="MM/YY"
                        views={['year', 'month']}
                        minDate={new Date()}
                        maxDate={new Date('2026-03-01')}
                        value={date}
                        onChange={
                          (newDate) => {setValue("expiryDate", setDate(newDate))}
                        }
                        inputRef={register({required: true})}
                        error={!!errors.expiryDate}
                      />
                    </MuiPickersUtilsProvider>
                    {errors.expiryDate && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}
                  </Grid>
                  
                  <Grid item className={classes.smallGrid}>
                    <InputLabel htmlFor="cvc" className={classes.label} >CVC</InputLabel>
                    <Input
                      type="text"
                      id="cvc"
                      name="cvc"
                      placeholder="000"
                      defaultValue={cardData.cvc}
                      onChange={(evt) => setValue("cvc", maskCvc(evt.target.value))}
                      inputRef={register({required: true, minLength: 3})}
                      error={!!errors.cvc} />
                    {errors.cvc && errors.cvc.type === "required" && <FormHelperText>Поле обязательно для заполнения</FormHelperText>}
                    {errors.cvc && errors.cvc.type === "minLength" && <FormHelperText>CVC состоит из 3 цифр</FormHelperText>}
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} sm={6} >
                <Container className={classes.card} >
                  <Grid container spacing={2} >
                    <Grid container item wrap="nowrap" alignItems="center" justify="space-between">
                      <img width="33" height="33" src={logoPic} alt="loft-taxi logo-pic"/>
                      <MuiPickersUtilsProvider utils={DayjsUtils}>
                        <DatePicker
                          readOnly
                          className={classes.data}
                          format="MM/YY"
                          value={date}
                          onChange={
                            (newDate) => {setValue("expiryDate", setDate(newDate))}
                          }
                          error={!!errors.expiryDate}
                        />
                      </MuiPickersUtilsProvider>
                    </Grid>

                    <Grid container item alignItems="center" >
                      <p className={classes.number}>
                        {
                          watchCardNumber ? watchCardNumber : (cardData.cardNumber ? cardData.cardNumber : "0000 0000 0000 0000")
                        }
                      </p>
                    </Grid>

                    <Grid container item justify="space-between">
                      <img width="29" height="26" src={chip} alt="chip"/>
                      <img width="46" height="28" src={masterCard} alt="masterCard"/>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>

            <Grid container item className={classes.smallGrid} >
              <SubmitButton>Сохранить</SubmitButton>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
};

FormProfile.propTypes = {
  cardData: PropTypes.shape({
    cardName: PropTypes.string,
    cardNumber: PropTypes.string,
    expiryDate: PropTypes.string,
    cvc: PropTypes.string
  })
};

export default FormProfile;
