import { grid, DefaultTheme } from 'theme'
import styled, { css, ThemeProps } from 'styled-components'
import { Flexbox } from '../../flexbox'
import { ColProps } from './col'

export const getFlexBasis = (size?: number) => {
  if (!size) {
    return 'auto'
  }
  return `${100 * (size / 12)}%`
}

type StyledColProps = Partial<ColProps & ThemeProps<DefaultTheme>>

export const StyledCol = styled(Flexbox)(
  ({ xs, sm, md, lg, theme, customStyles }: StyledColProps) => {
    const d = theme?.gridSystem?.breakpoints ?? grid.breakpoints
    const p = theme?.gridSystem?.paddings ?? grid.paddings
    return css`
      display: flex;

      @media (min-width: ${`${d.xs}px`}) and (max-width: ${`${d.sm - 1}px`}) {
        flex: ${`0 0 ${getFlexBasis(xs)}`};
        max-width: ${getFlexBasis(xs)};
        padding: ${`${p.xs!}px`};
      }

      @media (min-width: ${`${d.sm}px`}) and (max-width: ${`${d.md! - 1}px`}) {
        flex: ${`0 0 ${getFlexBasis(sm)}`};
        max-width: ${getFlexBasis(sm)};
        padding: ${`${p.sm!}px`};
      }

      @media (min-width: ${`${d.md}px`}) and (max-width: ${`${d.lg! - 1}px`}) {
        flex: ${`0 0 ${getFlexBasis(md)}`};
        max-width: ${getFlexBasis(md)};
        padding: ${`${p.md!}px`};
      }

      @media (min-width: ${`${d.lg}px`}) {
        flex: ${`0 0 ${getFlexBasis(lg)}`};
        max-width: ${getFlexBasis(lg)};
        padding: ${`${p.md!}px`};
      }
      ${customStyles ?? {}}
    `
  },
)
