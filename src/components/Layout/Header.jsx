import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';
import AuthNav from '../common/auth-nav';

const { primary_accent_color } = colors;

const linkStyle = {
  color: '#E2F0F7',
  paddingRight: '75px',
};

function HeaderContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10px 20px',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/graphs" style={linkStyle}>
          Graphs
        </Link>
        <Link to="/profile" style={linkStyle}>
          Profile
        </Link>
        <AuthNav linkStyle={linkStyle} />
      </div>
    </div>
  );
}

export { HeaderContent };
