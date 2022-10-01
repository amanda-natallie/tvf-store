import React, { forwardRef, Ref } from 'react'
import { FlexboxProps } from '../../flexbox'

export interface ColProps extends FlexboxProps {
  children: React.ReactNode
  xs?: number
  sm?: number
  md?: number
  lg?: number
}

import { StyledCol } from './styles'

export const Col = forwardRef(
  (props: ColProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const {
      children,
      alignItems = 'flex-start',
      justifyContent = 'flex-start',
      ...rest
    } = props

    return (
      <StyledCol {...{ ref, alignItems, justifyContent, ...rest }}>{children}</StyledCol>
    )
  },
)

Col.displayName = 'Col'
export default Col
