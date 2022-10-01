import { pxToRem } from 'utils'
import { Borders } from './types'

export const size: Borders['size'] = {
  default: '1px solid',
}

export const radius: Borders['radius'] = {
  alert: pxToRem(8.8),
  button: pxToRem(50),
  cardButton: pxToRem(8),
  card: pxToRem(8),
  input: pxToRem(12),
  dropdown: pxToRem(13.008),
  tag: pxToRem(24),
  round: '50%',
  full: '100%',
}

const borders: Borders = {
  size,
  radius,
}

export default borders
