import { createGlobalStyle } from 'styled-components';
import theme from '@/theme';

const GlobalStyle = createGlobalStyle`
  a, button {
    cursor: pointer;
    transition: opacity 0.3s ease;
    ${theme.bp.tabletPmin`
      &:hover {
        opacity: 0.8;
      }
    `}
  }

  a {
    color: currentColor;
  }

  a:not([class]) {
    transition: color 0.3s ease;
    color: ${theme.colors.baseFontLinkColor};
    text-decoration: underline;
    ${theme.bp.tabletPmin`
      &:hover {
        opacity: 1;
        text-decoration: none;
      }
    `}
  }

  body {
    color: ${theme.colors.baseFontColor};
    ${theme.fonts.fz()}
    font-family: ${theme.fonts.family.baseFontFamily};
    line-height: ${theme.fonts.size.baseLineHeight};
    letter-spacing: ${theme.fonts.size.baseLetterSpacing};
    overflow-wrap: break-word;
    -webkit-text-size-adjust: 100%;
    word-wrap: break-word;
  }

  input, button, textarea, select {
    color: ${theme.colors.baseFontColor};
    font-family: ${theme.fonts.family.baseFontFamily};
    line-height: ${theme.fonts.size.baseLineHeight};
    font-size: 100%;
  }

  [role="tabpanel"] {
    &[aria-hidden="true"] {
      display: none;
    }
    &[aria-hidden="false"] {
      display: block;
    }
  }

  a[href*="tel:"] {
    ${theme.bp.tabletPmin`
      pointer-events: none;
    `}
  }
`;

export default GlobalStyle;
