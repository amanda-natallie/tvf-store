import styled, { css, FlattenSimpleInterpolation } from 'styled-components'
import { FlexboxProps } from './types'

import { paddings } from 'theme'
import { flexPosition } from 'utils'

export const StyledFlexbox = styled.div<FlexboxProps>`
  ${({
    fullHeight,
    fullScreen,
    fullWidth,
    width,
    height,
    padding,
    noPadding,
    customStyles,
    alignItems,
    justifyContent,
    flexDirection,
    gap,
    noWrap,
  }: FlexboxProps): FlattenSimpleInterpolation => {
    return css`
      ${flexPosition(alignItems, justifyContent, flexDirection)};
      height: ${fullScreen ? '100vh' : fullHeight ? '100%' : height ?? 'auto'};
      width: ${fullScreen ? '100vw' : fullWidth ? '100%' : width ?? 'auto'};
      gap: ${gap ?? '0'};
      flex-wrap: ${noWrap ? 'nowrap' : 'wrap'};
      padding: ${noPadding
        ? '0 !important'
        : padding === 'lg'
        ? paddings.cardLG
        : paddings.cardMD};

      ${customStyles || {}}
    `
  }}
`
