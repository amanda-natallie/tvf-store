import { forwardRef, Ref } from 'react'
import { StyledFlexbox } from './styles'
import { FlexboxProps } from './types'

export const Flexbox = forwardRef(
  (props: FlexboxProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const {
      children,
      alignItems = 'center',
      justifyContent = 'flex-start',
      flexDirection = 'column',
      padding = 'md',
      ...rest
    } = props
    return (
      <StyledFlexbox
        {...{ alignItems, justifyContent, flexDirection, padding, ref }}
        {...rest}
      >
        {children}
      </StyledFlexbox>
    )
  },
)

Flexbox.displayName = 'Flexbox'

export default Flexbox
