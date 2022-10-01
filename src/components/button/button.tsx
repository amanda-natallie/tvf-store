import { ButtonVariantProps, Palette } from 'theme'
import { forwardRef, Ref } from 'react'
import { ComponentProps } from '../types'

import { StyledDisabledButton, StyledVariantButton } from './styles'

export interface ButtonProps extends ComponentProps {
  variant?: keyof ButtonVariantProps
  color?: keyof Palette['buttons']
  disabled?: boolean
  onClick?: (params?: any) => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  iconButton?: boolean
}

export const Button = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
    if (props.disabled) {
      return <StyledDisabledButton ref={ref} {...props} />
    }
    return <StyledVariantButton ref={ref} {...props} />
  },
)

Button.displayName = 'Button'

export default Button
