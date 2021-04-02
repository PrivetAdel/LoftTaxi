import React, {useEffect} from 'react';
import FormProfile from './FormProfile';
import FormProfileSave from './FormProfileSave';
import {useSelector, useDispatch} from 'react-redux';
import {postCard} from '../../redux/actions';

const ProfilePage = () => {
  const isCardData = useSelector(({cardReducer}) => cardReducer.isCardData);
  const cardData = useSelector(({cardReducer}) => cardReducer.cardData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postCard(false))
  }, [])

  return (
    <>
      { 
        (!isCardData ? <FormProfile cardData={cardData} /> : <FormProfileSave />)
      }
    </>
  );
};

export default ProfilePage;
