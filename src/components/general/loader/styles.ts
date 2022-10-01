import styled, { css } from 'styled-components'
import { palette } from 'theme'
import { hexToRgba } from 'utils'
import { Flexbox, FlexboxProps } from '../flexbox'

export const StyledLoaderWrapper = styled(Flexbox)<FlexboxProps>`
  ${({ fullScreen }) => css`
    position: ${fullScreen ? 'fixed' : 'relative'};
    z-index: ${fullScreen ? 9999 : 'auto'};
    background-color: ${fullScreen
      ? hexToRgba(palette.grayScale[100], 0.3)
      : 'transparent'};
    backdrop-filter: ${fullScreen ? 'blur(2px)' : 'none'};
    top: 0;
    left: 0;
  `}
`
