import colors from './colors'
import fonts from './fonts'
import paddings from './paddings'
import shadows from './shadows'
import borders from './borders'
import { grid } from './grid'
import { flexPosition, spacing } from './mixins'
import type { DefaultTheme } from './types'

export { default as borders } from './borders'
export { default as colors } from './colors'
export { default as fonts } from './fonts'
export { default as GlobalStyles } from './globalStyles'
export { default as paddings } from './paddings'
export { default as shadows } from './shadows'
export { default as grid } from './grid'

export * from './types'
export * from './fonts'
export * from './borders'
export * from './colors'
export * from './paddings'
export * from './shadows'
export * from './grid'

const theme: DefaultTheme = {
  borders,
  colors,
  fonts,
  paddings,
  shadows,
  gridSystem: grid,
  flexPosition,
  spacing,
}

export const defaultTheme: DefaultTheme = theme
