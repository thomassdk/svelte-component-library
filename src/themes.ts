import colors from './colors';
import '@fontsource/source-serif-pro';
import '@fontsource/libre-franklin';

const fonts = {
  headings: '"Source Serif Pro", serif',
  body: '"Libre Franklin", sans-serif',
  // https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.3125rem',
    xl2: '1.5rem',
    xl3: '2.652rem',
    xl4: '4rem',
  },
};

export default {
  light: {
    fonts,
    colors: {
      text: colors.slate[500],
      background: colors.gray[200],
      primary: colors.white,
      primary_dark: colors.slate[900],
      secondary: colors.indigo[500],
    },
  },
  dark: {
    fonts,
    colors: {
      text: colors.slate[400],
      background: colors.slate[900],
      primary: colors.slate[400],
      primary_dark: colors.white,
      secondary: colors.indigo[500],
    },
  },
};
