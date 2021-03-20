import React from 'react';
import FormOrder from './FormOrder';
import FormProfileEmpty from './FormProfileEmpty';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const {cardName, cardNumber, expiryDate, cvc} = useSelector(({cardReducer}) => cardReducer.cardData);

  return (
    <div>
      { 
        (cardName && cardNumber && expiryDate && cvc ? 
          <FormOrder /> : <FormProfileEmpty />
        )
      }
    </div>
  )
};

export default ProfilePage;