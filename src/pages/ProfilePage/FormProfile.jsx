import React, {useCallback} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Typography, InputLabel, Input, Grid} from '@material-ui/core';
import {Form, SubmitButton, Overlay} from '../../components';
import {useDispatch} from 'react-redux';
import {saveCardData} from '../../redux/actions';
import {useForm} from 'react-hook-form';
import PropTypes from 'prop-types';
import logoPic from '../../assets/logo-pic.svg';
import chip from '../../assets/chip.svg';
import masterCard from '../../assets/master-card-logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 8),
    zIndex: 2,
    pointerEvents: 'all'
  },
  title: {
    fontWeight: 700,
    margin: theme.spacing(1, 0)
  },
  label: {
    marginTop: theme.spacing(1)
  },
  card: {
    padding: theme.spacing(2, 3),
    marginTop: theme.spacing(3)
  },
  inputData: {
    border: 'none',
    textAlign: 'end',
    color: 'black',
    outline: 'none'
  },
  inputNumber: {
    border: 'none',
    fontSize: '1rem',
    color: 'black',
    outline: 'none'
  },
  smallGrid: {
    maxWidth: '50%'
  },
  longGrid: {
    flexGrow: 1
  }
}));

const FormProfile = ({cardData}) => {
  const [formData, setFormData] = React.useState({
    cardName: cardData.cardName, 
    cardNumber: cardData.cardNumber, 
    expiryDate: cardData.expiryDate, 
    cvc: cardData.cvc
  });
  const {register, errors} = useForm();
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setFormData({ ...formData, [name]: value});
  };

  const saveCardDataHandler = useCallback((formData) => {
    dispatch(saveCardData(formData));
  }, []);

  const submitHandler = () => {
    saveCardDataHandler(formData);
  };

  return (
    <>
      <Overlay />
      
      <Container maxWidth="md" className={classes.root} >
        <Typography className={classes.title} align="center" variant="h4" data-testid="formTitle">
          Профиль
        </Typography>
        <Typography align="center" variant="subtitle2" color="textSecondary">
          Введите платежные данные
        </Typography>
        <Form onSubmitHandler={submitHandler}>
          <Grid container justify="center" spacing={2}>
            <Grid container direction="row" justify="space-between" spacing={5}>
              <Grid container item xs={12} sm={6} spacing={2}>
                <Grid item className={classes.longGrid}>
                  <InputLabel htmlFor="cardName" className={classes.label} >Имя владельца</InputLabel>
                  <Input
                    fullWidth
                    type="text"
                    id="cardName"
                    name="cardName"
                    placeholder="Loft"
                    value={formData.cardName}
                    onChange={handleChange}
                    inputRef={register({required: true})} />
                  {errors.password && <p>Поле обязательно для заполнения</p>}
                </Grid>

                <Grid item className={classes.longGrid}>
                  <InputLabel htmlFor="cardNumber" className={classes.label} >Номер карты</InputLabel>
                  <Input
                    fullWidth
                    required
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    inputRef={register}
                    value={formData.cardNumber}
                    onChange={handleChange} />
                </Grid>

                <Grid container item className={classes.longGrid} spacing={2} >
                  <Grid item className={classes.smallGrid}>
                    <InputLabel htmlFor="expiryDate" className={classes.label} >MM/YY</InputLabel>
                    <Input
                      required
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      placeholder="00/00"
                      inputRef={register} 
                      value={formData.expiryDate}
                      onChange={handleChange} />
                  </Grid>
                  
                  <Grid item className={classes.smallGrid}>
                    <InputLabel htmlFor="cvc" className={classes.label} >CVC</InputLabel>
                    <Input
                      required
                      type="number"
                      id="cvc"
                      name="cvc"
                      placeholder="000"
                      inputRef={register} 
                      value={formData.cvc}
                      onChange={handleChange} />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} sm={5} >
                <Container maxWidth="xs" className={classes.card} >
                  <Grid container spacing={2} >
                    <Grid container item justify="space-between">
                      <img width="33" height="33" src={logoPic} alt="loft-taxi logo-pic"/>
                      <input
                        readOnly
                        type="text"
                        placeholder="00/00"
                        value={formData.expiryDate}
                        className={classes.inputData} />
                    </Grid>

                    <Grid container item >
                      <input
                        readOnly
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={formData.cardNumber}
                        className={classes.inputNumber} />
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
        </Form>
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
