import { Breakpoints, Breakpoint, Grid } from './types'

export const breakpoints: Breakpoint = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536,
}

export const paddingsSimulator: Breakpoints = {
  xs: 16,
  sm: 20,
  md: 20,
  lg: 20,
}

export const paddingsGeneral: Breakpoints = {
  ...paddingsSimulator,
  lg: 40,
}

export const marginsGeneral: Breakpoints = {
  xs: 20,
  sm: 40,
  md: 80,
  lg: 80,
}

export const defaultGrid: Grid['defaultGrid'] = {
  breakpoints: breakpoints,
  paddings: paddingsGeneral,
  margins: marginsGeneral,
}

export const simulatorGrid: Grid['defaultGrid'] = {
  breakpoints: breakpoints,
  paddings: paddingsSimulator,
  margins: marginsGeneral,
}

const grid: Grid = {
  defaultGrid,
  simulatorGrid,
  breakpoints,
  paddingsGeneral,
  paddingsSimulator,
  marginsGeneral,
}

export default grid
