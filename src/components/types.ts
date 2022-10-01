import { ReactNode } from 'react'
import { CSSObject, FlattenSimpleInterpolation } from 'styled-components'

export interface ComponentProps extends React.HTMLAttributes<HTMLElement> {
  as?: any
  className?: string
  children?: ReactNode | string | undefined
  customStyles?: CSSObject | FlattenSimpleInterpolation
}
