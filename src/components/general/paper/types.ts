import { ReactNode } from 'react'
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components'
import { ButtonProps } from '../button'
import { FlexboxProps } from '../flexbox'

export enum ThemeColorsPaper {
  error,
  warning,
  success,
  badge,
  info,
}

export type ColorPropsPaper = keyof typeof ThemeColorsPaper

export interface PaperProps extends FlexboxProps {
  ref?: React.Ref<HTMLDivElement>
  alertProps?: {
    variant?: ColorPropsPaper
    message: ReactNode
    isVisible?: boolean
  }
  cardActionsProps?: {
    children?: ReactNode
    className?: string
    customStyles?: CSSObject | FlattenSimpleInterpolation
  }
  cardTitleProps?: {
    title?: string | ReactNode
    endAdornment?: ReactNode
    children?: ReactNode
    className?: string
    customStyles?: CSSObject | FlattenSimpleInterpolation
  }
  buttonPaperProps?: ButtonProps & {
    isSmall?: boolean
    children?: ReactNode | string
    customStyles?: CSSObject | FlattenSimpleInterpolation
  }
  noRound?: boolean
  bordered?: boolean
  noShadow?: boolean
  noBg?: boolean
  isBlurred?: boolean
  fadeIn?: boolean
  isDialog?: boolean
  withHover?: boolean
}
