import React from 'react';

let userProfile = false;

if (localStorage.getItem('user_profile') !== '') {
  userProfile = JSON.parse(localStorage.getItem('user_profile'));
};

const CheckAuthContext = React.createContext(userProfile);

const CheckAuthProvider = (props) => {
  return (
    <CheckAuthContext.Provider value={userProfile}>
      {props.children}
    </CheckAuthContext.Provider>
  )
};

export { CheckAuthContext, CheckAuthProvider };
