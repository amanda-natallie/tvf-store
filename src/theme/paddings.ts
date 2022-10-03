import { pxToRem } from 'utils'
import { Paddings } from './types'

const paddings: Paddings = {
  collapse: {
    inline: pxToRem(32),
    block: pxToRem(24),
  },
  cardLG: pxToRem(48),
  cardMD: pxToRem(32),
  dialog: pxToRem(32),
  button: `${pxToRem(8)} ${pxToRem(18)}`,
  pillButton: pxToRem(10),
  input: pxToRem(48),
  icon: pxToRem(26.5),
  cardTitle: `${pxToRem(20)} ${pxToRem(40)}`,
}

export default paddings
