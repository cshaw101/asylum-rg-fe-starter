import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = ({ linkStyle }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      style={{ 
        ...linkStyle, 
        backgroundColor: 'transparent', 
        border: 'none', 
        cursor: 'pointer', 
        
      }}
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
