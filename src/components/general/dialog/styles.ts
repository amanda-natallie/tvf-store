import styled, { CSSObject, FlattenSimpleInterpolation } from 'styled-components'
import { borders, paddings, palette } from 'theme'
import { flexPosition, pxToRem } from 'utils'
import { Flexbox, FlexboxProps } from '../flexbox'

export interface DialogProps extends FlexboxProps {
  isOpen?: boolean
  width?: string
  customStyles?: CSSObject | FlattenSimpleInterpolation
}

export const StyledOverlay = styled(Flexbox)<DialogProps>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  opacity: ${({ isOpen }): string => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }): string => (isOpen ? 'visible' : 'hidden')};
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
`

export const StyledDialogBox = styled(Flexbox)<DialogProps>`
  width: ${({ width }): string => width ?? 'auto'};
  min-height: 200px;
  height: unset !important;
  background-color: ${palette.grayScale[50]};
  border-radius: ${borders.radius.card};
  padding: ${paddings.dialog};
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation => customStyles || {}}
`

export const StyledActions = styled.div`
  width: 100%;
  ${flexPosition('center', 'flex-end')};
  margin-top: ${pxToRem(28)};
  border-top: 1px solid ${palette.grayScale[200]};

  button {
    margin: 28px 5px 5px 5px;
  }
`
