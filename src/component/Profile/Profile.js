import React from 'react';

import isEmpty from 'lodash/isEmpty';

import RegisterForm from '../RegisterForm/RegisterForm';

import './Profile.scss'

const Profile = () => {
  let userProfile;
  if (localStorage.getItem('user_profile') !== '') {
    userProfile = JSON.parse(localStorage.getItem('user_profile'));
  }

  const handleLogut = () => {
    localStorage.removeItem('user_profile');
    window.location.reload();
  }

  return (
    <div className="user-profile-container">
      {!isEmpty(userProfile) ? (
        <div>
          <h1>User profile</h1>
          <div className="user-profile">
            <div className="user-profile-row">
              Username:
              {userProfile.username}
            </div>
            <div className="user-profile-row">
              Interested in:
              {userProfile.interested}
            </div>
            <div className="user-profile-row">
              Address:
              {userProfile.address}
            </div>
          </div>
          <button onClick={handleLogut}>
            Logout
          </button>
        </div>
      ) : (
        <RegisterForm />
      )}
    </div>
  )
};

export default Profile;
