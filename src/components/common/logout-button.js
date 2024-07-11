import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = ({ linkStyle }) => {
  const { logout } = useAuth0();
  return (
    <button
      style={{ 
        ...linkStyle, 
        backgroundColor: 'transparent', 
        border: 'none', 
        cursor: 'pointer', 
      }}
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
