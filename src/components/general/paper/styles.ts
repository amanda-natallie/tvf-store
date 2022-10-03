import styled, { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components'
import { fonts, palette, borders, paddings, defaultTheme as theme } from 'theme'
import { StyledVariantButton } from '../button/styles'
import { Flexbox, FlexboxProps } from '../flexbox'
import { PaperProps } from './types'
import { pxToRem } from 'utils'
import { ButtonProps } from '../button'
import { fadeInAnimation } from '../animation'

export type CustomPaperProps = PaperProps &
  ButtonProps & {
    isSmall?: boolean
  }

export const StyledDefaultPaper = styled(Flexbox)<PaperProps>`
  ${({
    bordered,
    noRound,
    noShadow,
    noBg,
    isBlurred,
    fadeIn,
    customStyles,
    bgColor,
    withHover,
  }: PaperProps): FlattenSimpleInterpolation => {
    return css`
      border: ${bordered ? `1px solid ${palette.grayScale[300]}` : 'transparent'};
      border-radius: ${noRound ? 0 : borders.radius.card};
      box-shadow: ${
        isBlurred ? theme.shadows.blurred : noShadow ? 'unset' : theme.shadows.default
      };
      background-color: ${noBg ? 'transparent' : bgColor ?? palette.grayScale[50]};
      pointer-events: ${isBlurred ? 'none' : 'all'};
      transition: all 0.3s ease-in-out;
      animation: ${
        fadeIn
          ? css`
              ${fadeInAnimation} 0.5s linear
            `
          : 'none'
      };
      filter: ${isBlurred ? 'blur(5px)' : 'none'};
      ${
        withHover &&
        css`
          cursor: pointer;
          &:hover {
            box-shadow: ${theme.shadows.hover};
          }
        `
      }
      
        }
      ${customStyles || {}};
    `
  }}
`

type ButtonPaperProps = Partial<FlexboxProps & PaperProps & CustomPaperProps>
export const StyledButtonPaper = styled(StyledVariantButton)<ButtonPaperProps>`
  ${(buttonPaperProps): FlattenSimpleInterpolation => {
    const isSmall = buttonPaperProps?.isSmall
    return css`
      border-radius: ${borders.radius.cardButton};
      padding: ${`0 ${paddings.pillButton}`};
      height: ${isSmall ? pxToRem(60) : pxToRem(90)};
      background: ${palette.grayScale[50]};
      box-shadow: ${theme.shadows.default};
      & p {
        color: inherit;
      }
      &:hover {
        box-shadow: ${theme.shadows.hover};
      }
      ${buttonPaperProps?.customStyles || {}}
    `
  }}
`
type TitleProps = Partial<FlexboxProps & PaperProps>
export const StyledPaperTitleWrapper = styled(Flexbox)<TitleProps>`
  border-bottom: ${`1px solid ${palette.grayScale[100]}`};
  padding: ${({ noPadding }): string | undefined =>
    noPadding ? '0' : paddings.cardTitle};
  ${({ cardTitleProps }): CSSObject | FlattenSimpleInterpolation =>
    cardTitleProps?.customStyles || {}}
`

export const StyledPaperTitle = styled.h4`
  font-weight: ${fonts.heading.h1.fontWeight};
  font-size: ${fonts.heading.h1.fontSize};
  line-height: ${fonts.heading.h1.lineHeight};
  text-align: left;
`

export const StyledPaperActions = styled(Flexbox)`
  padding: ${pxToRem(48)};
  gap: ${paddings.cardMD};
`

export const StyledPaperFooterAlert = styled.div`
  ${({ alertProps }: Partial<PaperProps>): FlattenSimpleInterpolation => {
    const variant = alertProps?.variant || 'success'
    return css`
      background-color: ${palette.system[variant]};
      font-size: ${fonts.body.small.fontSize};
      color: ${['error', 'success'].includes(variant)
        ? palette.grayScale[50]
        : palette.grayScale[900]};
      width: 100%;
      padding: ${`${pxToRem(10)} ${pxToRem(20)}`};
      font-size: ${pxToRem(12)};
      text-align: left;
      border-radius: ${`0 0 ${borders.radius.card} ${borders.radius.card}`};
    `
  }}
`

export const StyledPaperEndAdornment = styled(Flexbox)`
  padding: ${`${pxToRem(10)} ${pxToRem(20)}`};
`
