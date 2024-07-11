import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import LoadingComponent from '../../common/LoadingComponent';

function ProfilePage() {
  const { user, isLoading } = useAuth0();
  const { nickname, picture, email } = user;
  if (isLoading) {
    return <LoadingComponent />;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
      }}
    >
      <img src={picture} alt="Profile Picture" />
      <h2>{nickname}</h2>
      <p>{email}</p>
    </div>
  );
}
export default ProfilePage;