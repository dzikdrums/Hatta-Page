import React, { useState } from 'react';

import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/molecules/Header';
import MobileNavigation from 'components/molecules/MobileNavigation';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <GlobalStyle overflow={isMenuOpen} />
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <MobileNavigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
