import styled, { css, CSSObject, FlattenSimpleInterpolation } from 'styled-components'
import { palette, fonts as fontSizes, paddings as spacing, borders, shadows } from 'theme'
import { flexPosition, pxToRem } from 'utils'
import { DropdownProps } from './types'

export const MenuItem = styled.div`
  width: 100%;
  height: ${spacing.input};
  cursor: pointer;
  text-align: center;
  font-size: ${fontSizes.button.normal};
  ${flexPosition('center', 'center')};
  border-radius: 0;
  border: 0;
  background: ${palette.text.inverted};
  color: ${palette.text.secondary};
  &:not(:last-of-type) {
    border-bottom: 1px solid ${palette.grayScale[300]};
  }
  &:hover {
    background-color: ${palette.grayScale[100]};
  }
`
export const StyledPopupActions = styled.div<DropdownProps>`
  display: none;
  position: absolute;
  top: ${pxToRem(60)};
  right: 0;
  border-radius: ${borders.radius.dropdown};
  box-shadow: ${shadows.default};
  background-color: ${palette.grayScale[50]};
  white-space: nowrap;
  transition: all 0.3s ease;
  ${({ active }): false | FlattenSimpleInterpolation | undefined =>
    active &&
    css`
      display: block;
    `}
  z-index: 1000;
  max-height: calc(50vh - 100px);
  overflow-y: auto;
  ${({ customStyles }): CSSObject | FlattenSimpleInterpolation => customStyles || {}}
`

export const StyledArrow = styled.svg<DropdownProps>`
  transition: transform 0.2s ease;
  margin-left: 8px;
  margin-top: 8px;
  width: 16px;
  ${({ active }): false | FlattenSimpleInterpolation | undefined =>
    active &&
    css`
      margin-top: -2px;
      transform: rotate(180deg);
    `}
`
