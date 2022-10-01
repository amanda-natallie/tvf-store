import { forwardRef, ReactNode, Ref } from 'react'
import { ComponentProps } from '../../types'
import { StyledContainer } from './styles'

export interface ContainerProps extends ComponentProps {
  children: ReactNode
  spacing?: number
  fluid?: boolean
}

export const Container = forwardRef(
  (props: ContainerProps, ref: Ref<HTMLDivElement>): JSX.Element => {
    const { children, ...rest } = props

    return <StyledContainer {...{ ref, ...rest }}>{children}</StyledContainer>
  },
)

Container.displayName = 'Container'
export default Container
