import React from 'react';
import styled from 'styled-components';
import theme from '@/theme';

const StyledFooter = styled.footer`
  background-color: #c3cfe2;
  text-align: center;
  padding: 10px;
`;

const StyledFooterCopy = styled.p`
  color: #2c2c2c;
  ${theme.fonts.fz(12)};
  font-weight: 700;
  letter-spacing: 0.2em;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterCopy>© 2024 都道府県別 総人口推移グラフ</StyledFooterCopy>
    </StyledFooter>
  );
}

export default Footer;
