import { Breakpoints, Breakpoint, Grid } from './types'

export const breakpoints: Breakpoint = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
}

export const paddings: Breakpoints = {
  xs: 16,
  sm: 20,
  md: 20,
  lg: 20,
}

export const margins: Breakpoints = {
  xs: 20,
  sm: 40,
  md: 80,
  lg: 80,
}

export const grid: Grid = {
  breakpoints,
  paddings,
  margins,
}

export default grid
