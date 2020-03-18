import styled, { css } from 'styled-components';

import Hamburger from 'components/atoms/Hamburger';
import NavLink from 'components/atoms/NavLink';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink as link } from 'react-router-dom';
import { media } from 'utils';

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  color: black;
  padding-top: 38px;
  padding-left: 44px;

  ${media.desktop`
    width: 60%;
  `};
`;

const StyledLogo = styled.h1`
  font-weight: 900;
  font-size: 25px;
  color: black;
  transition: visibility 600ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

const StyledNav = styled.nav`
  color: black;
  opacity: 0;
  visibility: hidden;

  ${media.desktop`
    opacity: 1;
    visibility: visible;
    width: 50%;
    display: flex;
    justify-content: space-between;
  `}
`;

const BurgerWrapper = styled.div`
  opacity: 1;
  visibility: visible;

  ${media.desktop`
    opacity: 0;
    visibility: hidden;
  `};
`;

const Header = ({ isMenuOpen, toggleMenu }) => (
  <Wrapper>
    <StyledLogo isMenuOpen={isMenuOpen} as={link} to="/">
      HATTA
    </StyledLogo>
    <StyledNav isMenuOpen={isMenuOpen}>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/articles">articles</NavLink>
      <NavLink to="/gallery">gallery</NavLink>
      <NavLink to="/contact">contact</NavLink>
    </StyledNav>
    <BurgerWrapper onClick={toggleMenu}>
      <Hamburger active={isMenuOpen} />
    </BurgerWrapper>
  </Wrapper>
);

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Header;
