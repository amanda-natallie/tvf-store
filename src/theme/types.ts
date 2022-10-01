// COLORS
export type ButtonCSSProps = {
  color: string
  background: string
  border: string
}
export type ButtonBehaviorProps = {
  default: ButtonCSSProps
  hover: ButtonCSSProps
  focus: ButtonCSSProps
}

export type ButtonVariantProps = {
  contained: ButtonBehaviorProps
  outlined: ButtonBehaviorProps
  inverted: ButtonBehaviorProps
  info: ButtonBehaviorProps
  text: ButtonBehaviorProps
  disabled: {
    contained: ButtonCSSProps
    outlined: ButtonCSSProps
    inverted: ButtonCSSProps
    info: ButtonCSSProps
    text: ButtonCSSProps
  }
}
export type Palette = {
  primary: {
    darker: string
    dark: string
    main: string
    light: string
    lighter: string
    lightest: string
  }
  secondary: {
    dark: string
    main: string
    light: string
  }
  grayScale: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
  gradients: {
    primary: {
      main: string
      light: string
    }
    secondary: {
      light: string
      medium: string
      main: string
      dark: string
    }
    background: {
      red: string
      blue: string
    }
  }
  system: {
    error: string
    warning: string
    success: string
    badge: string
    info: string
    neutral: string
  }
  text: {
    primary: string
    secondary: string
    tertiary: string
    disabled: string
    placeholder: string
    label: string
    inverted: string
  }
  buttons: {
    primary: ButtonVariantProps
    secondary: ButtonVariantProps
    tertiary: ButtonVariantProps
  }
}

export type ColorProps = 'primary' | 'secondary' | 'tertiary' | 'grayScale' | 'text'

// BORDERS
export type Borders = {
  size: {
    default: string
  }
  radius: {
    alert: string
    button: string
    cardButton: string
    card: string
    input: string
    dropdown: string
    tag: string
    round: string
    full: string
  }
}

// FONTS
export type FontProps = {
  fontSize: string
  lineHeight: string
  fontWeight: string | number
}
export type BodyFontProps = Omit<FontProps, 'fontWeight'>

export type FontsProps = {
  highlight: {
    lg: FontProps
    md: FontProps
    sm: FontProps
  }
  heading: {
    h1: FontProps
    h2: FontProps
    h3: FontProps
    h4: FontProps
    h5: FontProps
    h6: FontProps
  }
  body: {
    lead: BodyFontProps
    normal: BodyFontProps
    small: BodyFontProps
    tiny: BodyFontProps
    weights: {
      light: string | number
      medium: string | number
    }
  }
  button: {
    small: FontProps
    normal: FontProps
    large: FontProps
  }
}

export type Fonts = {
  highlight: FontsProps['highlight']
  heading: FontsProps['heading']
  body: FontsProps['body']
  button: FontsProps['button']
  defaultFontFamily: string
}

// PADDINGS
export type Paddings = {
  collapse: {
    inline: string
    block: string
  }
  cardLG: string
  cardMD: string
  dialog: string
  button: string
  pillButton: string
  input: string
  icon: string
  cardTitle: string
}

// SHADOWS
export type Shadows = {
  default: string
  hover: string
  pressed: string
  blurred: string
  infoShadow: (firstColor: string) => string
  containedFocus: (firstColor: string, secondColor: string) => string
  outlinedFocus: (
    firstColor: string,
    secondColor: string,
    thirdColor: string,
    fourthColor: string,
  ) => string
}

export type Breakpoints = {
  lg: number
  xs: number
  sm: number
  md: number
}

export type Breakpoint = Breakpoints & {
  xl: number
}

export type Grid = {
  breakpoints: Breakpoint
  paddings: Breakpoints
  margins: Breakpoints
}

// MIXINS
export type Mixins = {
  flexPosition: (
    align?: string | false,
    justify?: string | false,
    flexDirection?: string,
  ) => string
  spacing: (spacing: number) => string
}

export type DefaultTheme = {
  borders: Borders
  colors: Palette
  fonts: Fonts
  paddings: Paddings
  shadows: Shadows
  gridSystem: Grid
  flexPosition: Mixins['flexPosition']
  spacing: Mixins['spacing']
}
