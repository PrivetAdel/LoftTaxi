import * as axios from 'axios';

const instans = axios.create({
  baseURL: 'https://loft-taxi.glitch.me/',
  responseType: 'json'
});

export const postRegister = (email, password, name, surname) => {
  return instans.post('register/', {email, password, name, surname}).then(response => response.data);
};

export const postAuth = (email, password) => {
  return instans.post('auth/', {email, password}).then(response => response.data);
};

export const postCard = (cardNumber, expiryDate, cardName, cvc, token) => {
  return instans.post('auth/', {cardNumber, expiryDate, cardName, cvc, token}).then(response => response.data);
};

export const getCard = (AUTH_TOKEN) => {
  return instans.get(`card?token=${AUTH_TOKEN}`).then(response => response.data);
};

export const getRoute = (address1, address2) => {
  return instans.get(`route?address1=${address1}&address2=${address2}`).then(response => response.data);
};

export const getAddressList = () => {
  return instans.get(`addressList`).then(response => response.data);
};
