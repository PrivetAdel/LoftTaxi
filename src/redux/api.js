import * as axios from 'axios';

const instans = axios.create({
  baseURL: 'https://loft-taxi.glitch.me/',
  responseType: 'json'
});

export const serverAuth = (email, password) => {
  return instans.post('auth/', {email, password})
    .then(response => (response.data.success));
};

export const saveCardData = (name, cardNumber, expiryDate, cvc) => {
  return instans.post('card/', {name, cardNumber, expiryDate, cvc})
    .then(response => (response.data.success));
};

