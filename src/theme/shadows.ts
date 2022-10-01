import { hexToRgba } from 'utils'
import palette from './colors'
import { Shadows } from './types'

const defaultRGBA = (alpha: number) => hexToRgba(palette.grayScale[900], alpha)

export const shadows: Shadows = {
  default: `0px 18px 60px -30px  ${defaultRGBA(0.18)}`,
  hover: `0px 4px 15px -10px  ${defaultRGBA(0.2)},  0px 9px 30px -15px ${defaultRGBA(
    0.2,
  )}, 0px 18px 60px -30px  ${defaultRGBA(0.2)},  0px 27px 100px -20px  ${defaultRGBA(
    0.2,
  )}`,
  pressed: `0px 4px 10px -8px  ${defaultRGBA(0.2)}`,
  blurred: `0 0 19px 13px  ${palette.grayScale[50]}`,
  infoShadow: (firstColor: string) => `0px 9px 50px -14px ${firstColor}`,
  outlinedFocus: (
    firstColor: string,
    secondColor: string,
    thirdColor: string,
    fourthColor: string,
  ) =>
    `0 0 0 3px ${firstColor}, 0 0 0 5px ${secondColor}, 0 0 0 8px ${thirdColor}, 0 0 0 12px ${hexToRgba(
      fourthColor,
      0.2,
    )}`,
  containedFocus: (firstColor: string, secondColor: string) =>
    `0 0 0 3px ${firstColor}, 0 0 0 8px ${hexToRgba(secondColor, 0.2)}`,
}

export default shadows
