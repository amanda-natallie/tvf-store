import { FontsProps, Palette } from 'theme'
import { forwardRef, Ref } from 'react'
import { ComponentProps } from '../types'

import { StyledTypography } from './styles'

type HighlightedTypographyProps = {
  size?: keyof FontsProps['highlight']
  variant?: 'highlight'
}

type HeadingTypographyProps = {
  size?: keyof FontsProps['heading']
  variant?: 'heading'
}

type ParagraphTypographyProps = {
  size?: keyof FontsProps['body']
  variant?: 'body'
}

type ButtonTypographyProps = {
  size?: keyof FontsProps['button']
  variant?: 'button'
}

type ConditionalTypographyProps =
  | HighlightedTypographyProps
  | HeadingTypographyProps
  | ParagraphTypographyProps
  | ButtonTypographyProps

type ConditionalColorProps =
  | {
      type?: 'text'
      color?: keyof Palette['text']
    }
  | {
      type?: 'system'
      color?: keyof Palette['system']
    }

interface CommonProps extends ComponentProps {
  colorScheme?: ConditionalColorProps
  gutterBottom?: number | string
  gutterTop?: number | string
  gutterLeft?: number | string
  gutterRight?: number | string
  gutterVertical?: number | string
  gutterHorizontal?: number | string
  noWrap?: boolean
  weight?: keyof FontsProps['body']['weights']
}

export type TypographyProps = CommonProps & ConditionalTypographyProps

export const Typography = forwardRef(
  (props: TypographyProps, ref: Ref<HTMLElement>): JSX.Element => {
    const { size, variant, ...rest } = props
    const defaultVariant = variant || 'body'
    let defaultSize = size || 'normal'
    let defaultTag = 'p'
    switch (defaultVariant) {
      case 'highlight':
        defaultSize = size || 'lg'
        break
      case 'heading':
        defaultSize = size || 'h1'
        break
      case 'button':
        defaultSize = size || 'normal'
        break
      default:
        defaultSize = size || 'normal'
        break
    }

    if (defaultVariant === 'heading') {
      switch (defaultSize) {
        case 'h1':
          defaultTag = 'h1'
          break
        case 'h2':
          defaultTag = 'h2'
          break
        case 'h3':
          defaultTag = 'h3'
          break
        case 'h4':
          defaultTag = 'h4'
          break
        case 'h5':
          defaultTag = 'h5'
          break
        case 'h6':
          defaultTag = 'h6'
          break
        default:
          defaultTag = 'p'
          break
      }
    }

    return (
      <StyledTypography
        ref={ref}
        variant={defaultVariant}
        size={defaultSize}
        as={defaultTag}
        {...rest}
      />
    )
  },
)

Typography.displayName = 'Typography'

export default Typography
