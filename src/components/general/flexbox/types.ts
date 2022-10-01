import { ComponentProps } from '../types'

export interface FlexboxProps extends ComponentProps {
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | false | string
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | false | string
  flexDirection?: 'row' | 'column' | string
  width?: string
  height?: string
  fullWidth?: boolean
  fullHeight?: boolean
  fullScreen?: boolean
  noPadding?: boolean
  padding?: 'lg' | 'md'
  bgColor?: string
  gap?: string
  noWrap?: boolean
}
