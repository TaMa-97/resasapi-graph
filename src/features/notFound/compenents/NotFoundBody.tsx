import React from 'react';
import styled from 'styled-components';
import theme from '@/theme';

const StyledWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;
`;
const StyledTitle = styled.h2`
  ${theme.fonts.fz(20)};
  font-weight: 700;
`;
const StyledTxt = styled.p`
  ${theme.fonts.fz(16)};
`;

function NotFoundBody() {
  return (
    <StyledWrapper>
      <StyledTitle>404 Not Found</StyledTitle>
      <StyledTxt>ご指定のページが見つかりませんでした。</StyledTxt>
    </StyledWrapper>
  );
}

export default NotFoundBody;
