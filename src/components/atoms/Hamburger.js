import styled, { css } from 'styled-components';

import PropTypes from 'prop-types';
import React from 'react';

const StyledButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: 0;
  padding: 0;
  width: 33px;
  height: 33px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSpanInner = styled.div`
  width: 33px;
  height: 33px;
  position: relative;

  :before {
    content: ' ';
    top: 50%;
    left: 0;
    transform: translatey(-5.5px);
    width: 100%;
    height: 1px;
    background-color: black;
    position: absolute;
    transition: transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1),
      width 250ms cubic-bezier(0.2, 0.6, 0.3, 1);
    ${({ active }) =>
      active &&
      css`
        transform: translatex(3.3000000000000003px) rotate(-135deg);
        width: 26.400000000000002px;
      `};
  }

  :after {
    content: ' ';
    top: 50%;
    left: 0;
    transform: translatey(5.5px);
    width: 100%;
    height: 1px;
    background-color: black;
    position: absolute;
    transition: transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1),
      width 250ms cubic-bezier(0.2, 0.6, 0.3, 1);
    ${({ active }) =>
      active &&
      css`
        transform: translatex(3.3000000000000003px) rotate(135deg);
        width: 26.400000000000002px;
      `};
  }
`;

const Hamburger = ({ active }) => {
  return (
    <StyledButton>
      <StyledSpanInner active={active} />
    </StyledButton>
  );
};

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Hamburger;
