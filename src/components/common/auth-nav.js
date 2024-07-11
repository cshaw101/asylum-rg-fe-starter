import React from 'react';
import AuthenticationButton from './authentication-button';

const AuthNav = ({ linkStyle }) => (
  <div className="navbar-nav ml-auto" style={linkStyle}>
    <AuthenticationButton />
  </div>
);

export default AuthNav;
