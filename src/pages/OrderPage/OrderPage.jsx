import React from 'react';
import FormOrder from './FormOrder';
import SuccessfulOrder from './SuccessfulOrder';
import FormProfileEmpty from './FormProfileEmpty';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const {cardName, cardNumber, expiryDate, cvc} = useSelector(({cardReducer}) => cardReducer.cardData);
  const isOrdered = useSelector(({orderReducer}) => orderReducer.isOrdered);

  return (
    <>
      { 
        (cardName && cardNumber && expiryDate && cvc ? 
          (isOrdered ? <SuccessfulOrder /> : <FormOrder />) : 
          <FormProfileEmpty />
        )
      }
    </>
  )
};

export default ProfilePage;