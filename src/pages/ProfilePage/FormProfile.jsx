import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, InputLabel, Input, Grid} from '@material-ui/core';
import {FormContainer, Form, SubmitButton} from '../../components';
import {useDispatch} from 'react-redux';
import {saveCardData} from '../../redux/actions';
import logoPic from '../../assets/logo-pic.svg';
import chip from '../../assets/chip.svg';
import masterCard from '../../assets/master-card-logo.svg';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0, 2)
  },
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

const FormProfile = ({cardData}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [cardName, setCardName] = React.useState(cardData.cardName);
  const [cardNumber, setCardNumber] = React.useState(cardData.cardNumber);
  const [expiryDate, setExpiryDate] = React.useState(cardData.expiryDate);
  const [cvc, setCvc] = React.useState(cardData.cvc);

  const nameChangeHandler = (evt) => {
    setCardName(evt.target.value);
  };

  const cardNumberChangeHandler = (evt) => {
    setCardNumber(evt.target.value);
  };
  
  const dateChangeHandler = (evt) => {
    setExpiryDate(evt.target.value);
  };

  const cvcChangeHandler = (evt) => {
    setCvc(evt.target.value);
  };

  const saveCardDataHandler = useCallback((cardName, cardNumber, expiryDate, cvc) => {
    dispatch(saveCardData(cardName, cardNumber, expiryDate, cvc));
  }, []);

  const submitHandler = (evt) => {
    evt.preventDefault();
    saveCardDataHandler(cardName, cardNumber, expiryDate, cvc);
  };

  return (
    <FormContainer maxWidth="md"  padding="5">
      <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
        Профиль
      </Typography>
      <Typography align="center" variant="subtitle2" color="textSecondary">
        Введите платежные данные
      </Typography>
      <Form onSubmitHandler={submitHandler}>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid container item xs={12} sm={6} spacing={2}>
            <Grid item className={classes.longGrid}>
              <InputLabel htmlFor="name" className={classes.label} >Имя владельца</InputLabel>
              <Input
                type="text"
                id="name"
                placeholder="Loft"
                value={cardName}
                onChange={nameChangeHandler}
                fullWidth
                required />
            </Grid>

            <Grid item className={classes.longGrid}>
              <InputLabel htmlFor="cardNumber" className={classes.label} >Номер карты</InputLabel>
              <Input
                type="text"
                id="cardNumber"
                value={cardNumber}
                placeholder="0000 0000 0000 0000"
                onChange={cardNumberChangeHandler}
                fullWidth
                required />
            </Grid>

            <Grid container item className={classes.longGrid} spacing={2}>
              <Grid item className={classes.smallGrid}>
                <InputLabel htmlFor="date" className={classes.label} >MM/YY</InputLabel>
                <Input
                  type="text"
                  id="date"
                  value={expiryDate}
                  placeholder="00/00"
                  onChange={dateChangeHandler}
                  required />
              </Grid>
              
              <Grid item className={classes.smallGrid}>
                <InputLabel htmlFor="cvc" className={classes.label} >CVC</InputLabel>
                <Input
                  type="number"
                  id="cvc"
                  value={cvc}
                  placeholder="000"
                  onChange={cvcChangeHandler}
                  required />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}  sm={6}>
            <FormContainer maxWidth="xs"  padding="4, 5">
              <img width="33" height="33" src={logoPic} alt="loft-taxi logo-pic"/>
              <p>{expiryDate}</p>
              <p>{cardNumber}</p>
              <img width="29" height="26" src={chip} alt="chip"/>
              <img width="50" height="28" src={masterCard} alt="masterCard"/>
            </FormContainer>
          </Grid>

          <Grid container item className={classes.smallGrid}>
            <SubmitButton>Сохранить</SubmitButton>
          </Grid>
        </Grid>
      </Form>
    </FormContainer>
  );
};

export default FormProfile;
