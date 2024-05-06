import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '@/theme';
import iconLogo from '@/images/common/icon_logo.svg';

const StyledHeader = styled.header`
  background-color: #c3cfe2;
  text-align: center;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  ${theme.fonts.fz(20)};
  font-weight: 700;
  color: #2c2c2c;
  text-decoration: none;
  transition: opacity 0.3s ease;
  padding-left: 40px;

  &:hover {
    opacity: 0.8;
  }

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    background-image: url(${iconLogo});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        <StyledLink to="/">都道府県別 総人口推移グラフ</StyledLink>
      </h1>
    </StyledHeader>
  );
}

export default Header;
