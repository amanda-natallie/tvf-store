import { pxToRem } from 'utils'
import { Fonts } from './types'

export const fonts: Fonts = {
  highlight: {
    lg: {
      fontWeight: 600,
      fontSize: pxToRem(48),
      lineHeight: pxToRem(56),
    },
    md: {
      fontWeight: 600,
      fontSize: pxToRem(40),
      lineHeight: pxToRem(48),
    },
    sm: {
      fontWeight: 600,
      fontSize: pxToRem(36),
      lineHeight: pxToRem(44),
    },
  },
  heading: {
    h1: {
      fontWeight: 600,
      fontSize: pxToRem(24),
      lineHeight: pxToRem(32),
    },
    h2: {
      fontWeight: 600,
      fontSize: pxToRem(20),
      lineHeight: pxToRem(28),
    },
    h3: {
      fontWeight: 600,
      fontSize: pxToRem(18),
      lineHeight: pxToRem(26),
    },
    h4: {
      fontWeight: 600,
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
    },
    h5: {
      fontWeight: 600,
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
    h6: {
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(18),
    },
  },
  body: {
    lead: {
      fontSize: pxToRem(18),
      lineHeight: pxToRem(26),
    },
    normal: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
    },
    small: {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
    tiny: {
      fontSize: pxToRem(12),
      lineHeight: pxToRem(18),
    },
    weights: {
      light: 300,
      medium: 500,
    },
  },
  button: {
    small: {
      fontWeight: 700,
      fontSize: pxToRem(12),
      lineHeight: pxToRem(18),
    },
    normal: {
      fontWeight: 700,
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
    large: {
      fontWeight: 600,
      fontSize: pxToRem(40),
      lineHeight: pxToRem(48),
    },
  },
  defaultFontFamily:
    "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');",
}

export default fonts as Fonts
