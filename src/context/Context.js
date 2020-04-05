import React from 'react';

let userProfile = false;

if (localStorage.getItem('user_profile') !== '') {
  userProfile = JSON.parse(localStorage.getItem('user_profile'));
};

const UserProfileContext = React.createContext(userProfile);

const UserProfileProvider = (props) => {
  return (
    <UserProfileContext.Provider value={userProfile}>
      {props.children}
    </UserProfileContext.Provider>
  )
};

export { UserProfileContext, UserProfileProvider };
