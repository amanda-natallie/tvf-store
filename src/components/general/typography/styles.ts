import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { FontProps, Fonts, fonts, palette } from 'theme'
import { TypographyProps } from './typography'

export const StyledMasterTypography = styled.p<TypographyProps>`
  ${({
    colorScheme = {
      type: 'text',
      color: 'primary',
    },
    customStyles = {},
  }: Partial<TypographyProps>): FlattenSimpleInterpolation => {
    return css`
      font-family: 'Lexend Deca', sans-serif;
      transition: all 0.2s ease-in-out;
      color: ${colorScheme.type === 'text'
        ? palette.text[colorScheme.color as keyof typeof palette.text]
        : palette.system[colorScheme.color as keyof typeof palette.system]};
      ${{ ...customStyles }}
    `
  }}
`

export const StyledTypography = styled(StyledMasterTypography)<TypographyProps>`
  ${({
    variant = 'body',
    size = 'normal',
    weight = 'light',
    ...rest
  }: Partial<TypographyProps>): FlattenSimpleInterpolation => {
    const fontVariant = fonts[variant]
    const fontSizeProps = fontVariant[size as keyof typeof fontVariant] as FontProps
    const weightProps = fonts.body.weights[
      weight as keyof typeof fonts.body.weights
    ] as keyof Fonts['body']['weights']
    return css`
      font-size: ${fontSizeProps.fontSize};
      line-height: ${fontSizeProps.lineHeight};
      font-weight: ${variant === 'body' ? weightProps : fontSizeProps.fontWeight};
      ${!!Object.keys(rest).filter(key => key.startsWith('gutter')) &&
      css`
        display: inline-block;
      `}
      ${rest.gutterBottom &&
      css`
        margin-bottom: ${rest.gutterBottom};
      `}
      ${rest.gutterTop &&
      css`
        margin-top: ${rest.gutterTop};
      `}
      ${rest.gutterLeft &&
      css`
        margin-left: ${rest.gutterLeft};
      `}
      ${rest.gutterRight &&
      css`
        margin-right: ${rest.gutterRight};
      `}
      ${rest.gutterVertical &&
      css`
        margin-block: ${rest.gutterVertical};
      `}
      ${rest.gutterHorizontal &&
      css`
        margin-inline: ${rest.gutterHorizontal};
      `}
      ${rest.customStyles && { ...rest.customStyles }}
    `
  }}
`
