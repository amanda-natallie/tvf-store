import styled, { CSSObject, FlattenSimpleInterpolation } from 'styled-components'
import { palette, borders, fonts as fontSizes, paddings as spacing } from 'theme'

import { flexPosition, pxToRem } from 'utils'

export interface CustomStyledInputProps {
  messageError?: boolean | null
  hasIcon?: boolean
  customStyles?: CSSObject | FlattenSimpleInterpolation
  noLabel?: boolean
}

export const StyledInput = styled.input<CustomStyledInputProps>`
  font-weight: 500;
  position: relative;
  caret-color: ${palette.primary.dark};
  background-color: ${palette.grayScale[50]};
  border-radius: ${borders.radius.input};
  width: 100%;
  height: ${spacing.input};
  padding: ${pxToRem(15)} ${pxToRem(21)};
  border: solid 1.5px
    ${({ messageError }): string =>
      messageError ? palette.system.error : palette.grayScale[300]};

  color: ${palette.text.secondary};
  font-size: ${fontSizes.button.normal};

  ${({ hasIcon }): string => (hasIcon ? 'padding-right: 30px;' : '')}

  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation => customStyles || {}}

	::placeholder {
    color: ${palette.grayScale[500]};
  }

  :disabled {
    background-color: ${palette.grayScale[300]};
    cursor: not-allowed;
    &::placeholder {
      color: ${palette.text.disabled};
    }
  }
  &:focus {
    outline: none;
  }
  @media print {
    display: none;
  }
`

export const StyledContainer = styled.div`
  ${flexPosition('center', 'center')};
  min-height: 62px;
  height: 100%;
  width: 100%;
  position: relative;
`

export const StyledIconContainer = styled.button<CustomStyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(48)};
  position: absolute;
  right: 0;
  top: 5px;
  width: 47px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  & > div {
    display: flex;
  }
`
