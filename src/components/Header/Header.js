import React from 'react';
import { Layout } from 'antd';

import "./Header.css";

const Header = () => {
  const { Header } = Layout;
  return (
      <React.Fragment>
    <Header className="header-banner">
            Hi I'm Connie
    </Header>
    </React.Fragment>
  );
};

export default Header;
