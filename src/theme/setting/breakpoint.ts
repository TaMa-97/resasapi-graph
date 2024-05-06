import { CSSObject, Interpolation, css } from 'styled-components';

const bp = {
  tabletP: (
    sp: CSSObject | TemplateStringsArray,
    ...interpolations: Interpolation<any>[]
  ): Interpolation<any> => css`
    @media (max-width: 768px) {
      ${css(sp, ...interpolations)}
    }
  `,
  tabletPmin: (
    pc: CSSObject | TemplateStringsArray,
    ...interpolations: Interpolation<any>[]
  ): Interpolation<any> => css`
    @media (min-width: 769px) {
      ${css(pc, ...interpolations)}
    }
  `,
  lg: (
    lg: CSSObject | TemplateStringsArray,
    ...interpolations: Interpolation<any>[]
  ): Interpolation<any> => css`
    @media (min-width: 1024px) {
      ${css(lg, ...interpolations)}
    }
  `,
  xl: (
    xl: CSSObject | TemplateStringsArray,
    ...interpolations: Interpolation<any>[]
  ): Interpolation<any> => css`
    @media (min-width: 1280px) {
      ${css(xl, ...interpolations)}
    }
  `,
};

export default bp;
