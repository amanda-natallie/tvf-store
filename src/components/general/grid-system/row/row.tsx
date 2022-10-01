import React, { forwardRef, Ref } from 'react'
import { FlexboxProps } from '../../flexbox'
import { StyledRow } from './styles'

export interface RowProps extends FlexboxProps {
  children: React.ReactNode
  spacing?: number
}

export const Row = forwardRef(
  (props: RowProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const {
      children,
      noPadding = true,
      fullWidth = false,
      flexDirection = 'row',
      width = 'unset',
      ...rest
    } = props

    return (
      <StyledRow {...{ ref, noPadding, fullWidth, width, flexDirection, ...rest }}>
        {children}
      </StyledRow>
    )
  },
)

Row.displayName = 'Row'
export default Row
