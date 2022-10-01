import { Palette } from './types'
import { hexToRgba } from 'utils'

export const primary: Palette['primary'] = {
  darker: '#242F38',
  dark: '#10446a',
  main: '#145685',
  light: '#1B8DB3',
  lighter: '#6BB5CE',
  lightest: '#B0D7E5',
}

export const secondary: Palette['secondary'] = {
  dark: '#B3193C',
  main: '#DD1F4A',
  light: '#F8D2DB',
}

export const grayScale: Palette['grayScale'] = {
  50: '#FFFFFF',
  100: '#F1F2F3',
  200: '#EDEFF0',
  300: '#E1E3E5',
  400: '#D0D5D9',
  500: '#ADB3B8',
  600: '#8B9399',
  700: '#707980',
  800: '#576066',
  900: '#1F2326',
}

export const gradients: Palette['gradients'] = {
  primary: {
    main: `linear-gradient(180deg, ${primary.lighter} 0%, ${primary.lightest} 100%);`,
    light: `linear-gradient(180deg, ${primary.lighter} 0%, ${primary.lightest} 100%);`,
  },
  secondary: {
    light: 'linear-gradient(180deg, #D0D5D9 0%, #E1E3E5 100%);',
    medium: 'linear-gradient(180deg, #8B9399 0%, #ADB3B8 100%);',
    main: 'linear-gradient(180deg, #707980 0%, #9A9EA1 100%);',
    dark: 'linear-gradient(180deg, #576066 0%, #707980 100%);',
  },
  background: {
    red: 'linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 89.58%), linear-gradient(90deg, #950E2D 0%, #DD1F4A 30.73%, #F9E6C6 100%)',
    blue: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, #12436E 0%, #AEEBE9 100%)',
  },
}

export const system: Palette['system'] = {
  error: '#DD1F4A',
  warning: '#E67417',
  success: '#138057',
  badge: '#C4D787',
  info: '#75B8CF',
  neutral: grayScale[600],
}

export const text: Palette['text'] = {
  primary: primary.darker,
  secondary: primary.main,
  tertiary: secondary.main,
  disabled: grayScale[600],
  placeholder: grayScale[500],
  label: primary.darker,
  inverted: '#FFFFFF',
}

export const buttons: Palette['buttons'] = {
  primary: {
    contained: {
      default: {
        color: grayScale[50],
        background: primary.main,
        border: primary.main,
      },
      hover: {
        color: grayScale[50],
        background: primary.dark,
        border: primary.dark,
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    outlined: {
      default: {
        color: primary.main,
        background: 'transparent',
        border: primary.main,
      },
      hover: {
        color: primary.dark,
        background: 'transparent',
        border: primary.dark,
      },
      focus: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
    },
    text: {
      default: {
        color: primary.main,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        color: primary.dark,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    inverted: {
      default: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
      hover: {
        color: primary.dark,
        background: grayScale[50],
        border: primary.main,
      },
      focus: {
        color: primary.main,
        background: grayScale[50],
        border: primary.lightest,
      },
    },
    info: {
      default: {
        color: primary.darker,
        background: grayScale[50],
        border: secondary.main,
      },
      hover: {
        color: primary.dark,
        background: grayScale[50],
        border: primary.main,
      },
      focus: {
        color: primary.main,
        background: grayScale[50],
        border: secondary.main,
      },
    },
    disabled: {
      contained: {
        color: grayScale[500],
        background: grayScale[400],
        border: grayScale[400],
      },
      outlined: {
        color: grayScale[500],
        background: 'transparent',
        border: grayScale[500],
      },
      inverted: {
        color: hexToRgba(primary.dark, 0.5),
        background: hexToRgba(grayScale[50], 0.5),
        border: grayScale[500],
      },
      info: {
        color: grayScale[500],
        background: grayScale[50],
        border: grayScale[400],
      },
      text: {
        color: grayScale[500],
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
  secondary: {
    contained: {
      default: {
        color: grayScale[50],
        background: secondary.main,
        border: secondary.main,
      },
      hover: {
        color: grayScale[50],
        background: secondary.dark,
        border: secondary.dark,
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    outlined: {
      default: {
        color: secondary.main,
        background: 'transparent',
        border: secondary.main,
      },
      hover: {
        color: secondary.dark,
        background: 'transparent',
        border: secondary.dark,
      },
      focus: {
        color: secondary.main,
        background: grayScale[50],
        border: secondary.main,
      },
    },
    text: {
      default: {
        color: secondary.main,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        color: secondary.dark,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    inverted: {
      default: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
      hover: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    info: {
      default: {
        color: primary.darker,
        background: grayScale[50],
        border: system.info,
      },
      hover: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
      focus: {
        color: primary.main,
        background: grayScale[50],
        border: system.info,
      },
    },
    disabled: {
      contained: {
        color: grayScale[500],
        background: grayScale[400],
        border: grayScale[400],
      },
      outlined: {
        color: grayScale[500],
        background: 'transparent',
        border: grayScale[500],
      },
      inverted: {
        color: hexToRgba(primary.dark, 0.5),
        background: hexToRgba(grayScale[50], 0.5),
        border: grayScale[500],
      },
      info: {
        color: grayScale[500],
        background: grayScale[400],
        border: grayScale[400],
      },
      text: {
        color: grayScale[500],
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
  tertiary: {
    contained: {
      default: {
        color: grayScale[50],
        background: secondary.main,
        border: secondary.main,
      },
      hover: {
        color: grayScale[50],
        background: secondary.dark,
        border: secondary.dark,
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    outlined: {
      default: {
        color: secondary.main,
        background: 'transparent',
        border: secondary.main,
      },
      hover: {
        color: secondary.dark,
        background: 'transparent',
        border: secondary.dark,
      },
      focus: {
        color: secondary.main,
        background: grayScale[50],
        border: secondary.main,
      },
    },
    text: {
      default: {
        color: secondary.main,
        background: 'transparent',
        border: 'transparent',
      },
      hover: {
        color: secondary.dark,
        background: 'transparent',
        border: 'transparent',
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    inverted: {
      default: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
      hover: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
      focus: {
        color: primary.darker,
        background: grayScale[50],
        border: primary.main,
      },
    },
    info: {
      default: {
        color: primary.darker,
        background: grayScale[50],
        border: system.badge,
      },
      hover: {
        color: primary.main,
        background: grayScale[50],
        border: primary.main,
      },
      focus: {
        color: primary.main,
        background: grayScale[50],
        border: system.badge,
      },
    },
    disabled: {
      contained: {
        color: grayScale[500],
        background: grayScale[400],
        border: grayScale[400],
      },
      outlined: {
        color: grayScale[500],
        background: 'transparent',
        border: grayScale[500],
      },
      inverted: {
        color: hexToRgba(primary.dark, 0.5),
        background: hexToRgba(grayScale[50], 0.5),
        border: grayScale[500],
      },
      info: {
        color: grayScale[500],
        background: grayScale[50],
        border: grayScale[400],
      },
      text: {
        color: grayScale[500],
        background: 'transparent',
        border: 'transparent',
      },
    },
  },
}

export const palette: Palette = {
  primary,
  secondary,
  grayScale,
  gradients,
  system,
  buttons,
  text,
}

export default palette
