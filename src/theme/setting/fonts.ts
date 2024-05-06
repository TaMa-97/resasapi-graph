const baseFont = 16;
const fonts = {
  family: {
    baseFontFamily:
      '"Zen Kaku Gothic New",YuGothic, "Yu Gothic",system-ui,sans-serif',
    baseFontFamilySerif: '"Yu Mincho", "YuMincho","Noto Serif JP",serif',
    fontNotoSans: '"Noto Sans JP",YuGothic, "Yu Gothic",system-ui,sans-serif',
    fontNotoSerif: '"Noto Serif JP","Yu Mincho", "YuMincho",serif',
    fontYuGothic: 'YuGothic, "Yu Gothic","Noto Sans JP",system-ui,sans-serif',
    fontYuMincho: '"Yu Mincho", "YuMincho","Noto Serif JP",serif',
    fontAlpha: '"Zen Kaku Gothic New",system-ui,sans-serif',
  },
  size: {
    baseFont,
    baseLineHeight: '1.8',
    baseLetterSpacing: '0',
  },
  fz(size = baseFont, important = false) {
    const result = size / 16;
    return `font-size: ${important ? `${result}rem !important` : `${result}rem`};`;
  },
};

export default fonts;
