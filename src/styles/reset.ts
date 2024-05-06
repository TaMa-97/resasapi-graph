import { createGlobalStyle } from 'styled-components';

const ResetStyle = createGlobalStyle`
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  form,
  fieldset,
  legend,
  figure,
  figcaption,
  button,
  input,
  textarea,
  p,
  blockquote,
  th,
  td {
    margin: 0;
    padding: 0;
  }
  address {
    font-style: normal;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  th {
    text-align: left;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }
  img,
  fieldset {
    border: 0;
  }
  img {
    height:auto;
    max-width:100%;
    vertical-align:top;
  }
  li {
    list-style-type: none;
  }
  textarea,
  input[type="text"],
  input[type="search"],
  input[type="password"],
  input[type="email"],
  input[type="tel"],
  input[type="url"],
  input[type="number"],
  input[type="submit"],
  select,
  button {
    appearance: none;
  }
  input[type="submit"],
  button,
  label,
  select {
    cursor:pointer;
  }
  input[type="submit"],
  button {
    &:hover {
    }
  }
  select {
    &::-ms-expand {
      display: none;
    }
  }
  br {
    line-height: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  :where(button, button[type], input[type="button"], input[type="submit"], input[type="reset"])[disabled] {
    cursor: not-allowed;
  }
`;

export default ResetStyle;
