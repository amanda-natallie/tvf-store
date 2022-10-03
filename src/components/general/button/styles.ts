import {
  fonts,
  borders,
  palette,
  paddings,
  ButtonBehaviorProps,
  ButtonVariantProps,
  defaultTheme as theme,
} from 'theme'
import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { ButtonProps } from './button'
import { flexPosition } from 'utils'

export const StyledMasterButton = styled.button<ButtonProps>`
  ${({
    fullWidth = false,
    iconButton = false,
    variant = 'contained',
    customStyles = {},
  }: Partial<ButtonProps>): FlattenSimpleInterpolation => {
    const notTextButton = variant !== 'text'
    return css`
      ${flexPosition('center', 'center')}
      position: relative;
      text-transform: uppercase;
      font-weight: ${fonts.button.normal.fontWeight};
      font-size: ${fonts.button.normal.fontSize};
      font-family: 'Lexend Deca', sans-serif;

      grid-gap: ${paddings.icon};

      transition: all 0.2s ease-in-out;
      width: ${iconButton ? '40px' : fullWidth ? '100%' : 'auto'};
      height: ${iconButton ? '40px' : 'unset'};
      border-radius: ${iconButton ? '100%' : !notTextButton ? 0 : borders.radius.button};
      padding: ${iconButton ? 0 : notTextButton ? paddings.button : 0};
      &:active,
      ${{ ...customStyles }} @media print {
        display: none;
      }
    `
  }}
`

export const StyledVariantButton = styled(StyledMasterButton)<ButtonProps>`
  ${({
    color = 'primary',
    variant = 'contained',
  }: Partial<ButtonProps>): FlattenSimpleInterpolation => {
    const buttonProps = palette.buttons[color]
    const colorPalette = buttonProps[variant] as ButtonBehaviorProps

    const focusColor = colorPalette.focus.color
    const focusBackgroundColor = colorPalette.focus.background
    return css`
      background-color: ${colorPalette.default.background};
      color: ${colorPalette.default.color};
      border: 2px solid ${colorPalette.default.border};
      &:hover {
        background-color: ${colorPalette.hover.background};
        color: ${colorPalette.hover.color};
        border: 2px solid ${colorPalette.hover.border};
        & svg path[fill='*'] {
          fill: ${colorPalette.hover.color};
        }
        & svg path[stroke='*'] {
          stroke: ${colorPalette.hover.color};
        }
      }
      &:focus { 
        border: ${
          variant === 'outlined' ? 'none' : `3px solid ${colorPalette.default.color}`
        };
        box-shadow: ${
          variant === 'outlined'
            ? theme.shadows.outlinedFocus(
                focusColor,
                focusBackgroundColor,
                focusColor,
                focusColor,
              )
            : theme.shadows.containedFocus(
                colorPalette.default.background,
                colorPalette.default.border,
              )
        };
      }    
    }
  };
 }
      & svg path[fill='*'] {
        fill: ${colorPalette.default.color};
      }
      & svg path[stroke='*'] {
        stroke: ${colorPalette.default.color};
      }
    `
  }}
`

export const StyledDisabledButton = styled(StyledMasterButton)<ButtonProps>`
  ${({
    color = 'primary',
    variant = 'contained',
  }: Partial<ButtonProps>): FlattenSimpleInterpolation => {
    const buttonProps = palette.buttons[color].disabled
    const colorPalette = buttonProps[variant as keyof ButtonVariantProps['disabled']]
    return css`
      background-color: ${colorPalette.background};
      color: ${colorPalette.color};
      border: ${variant === 'inverted' ? 'none' : `2px solid ${colorPalette.background}`};
      &:active,
      &:focus,
      &:hover {
        outline: none;
        box-shadow: none;
      }
      & svg path[fill='*'] {
        fill: ${colorPalette.color};
      }
      & svg path[stroke='*'] {
        stroke: ${colorPalette.color};
      }
    `
  }}
`
