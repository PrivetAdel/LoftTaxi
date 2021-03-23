import * as axios from 'axios';

const instans = axios.create({
  baseURL: 'https://loft-taxi.glitch.me/',
  responseType: 'json'
});

export const serverAuth = (email, password) => {
  return instans.post('auth/', {email, password})
    .then(response => (response.data));
};

export const postRegister = (email, password, name, surname) => {
  return instans.post('register/', {email, password, name, surname})
    .then(response => response.data);
};

export const saveToken = (token) => {
  localStorage.setItem('token', token);
}

export const saveCardData = (cardName, cardNumber, expiryDate, cvc) => {
  return instans.post('card/', {cardName, cardNumber, expiryDate, cvc})
    .then(response => (response.data.success));
};

export const getCardData = (token) => {
  return instans.get(`card?token=${token}`)
    .then(response => response.data);
};

export const getAddressList = () => {
  return instans.get(`addressList`)
    .then(response => response.data);
};

export const getRoute = (address1, address2) => {
  return instans.get(`route?address1=${address1}&address2=${address2}`)
    .then(response => response.data);
};
