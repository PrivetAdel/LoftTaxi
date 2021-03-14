import React from 'react';
import {FormProfile, FormProfileSave} from '../components';
import {useSelector} from 'react-redux';

const ProfilePage = () => {
  const [activeForm, setActiveForm] = React.useState(true);
  const isCardData = useSelector(({authReducer}) => authReducer.isCardData);
  
  const submitCardData = () => {
    if (!isCardData) {
      return;
    }

    setActiveForm((state) => !state);
  };

  return (
    <div>
      { 
        (activeForm ? <FormProfile submitCardData={submitCardData} /> : <FormProfileSave />)
      }
    </div>
  );
};

export default ProfilePage;
