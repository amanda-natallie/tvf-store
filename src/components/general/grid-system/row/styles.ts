import { grid, DefaultTheme } from 'theme'
import styled, { css, ThemeProps } from 'styled-components'
import { Flexbox, FlexboxProps } from '../../flexbox'
import { RowProps } from './'

type StyledRowProps = Partial<RowProps & FlexboxProps & ThemeProps<DefaultTheme>>

export const StyledRow = styled(Flexbox)(
  ({ spacing, theme, customStyles }: StyledRowProps) => {
    const d = theme?.gridSystem?.breakpoints ?? grid.breakpoints
    const p = theme?.gridSystem?.paddings ?? grid.paddings
    return css`
      flex-wrap: wrap;
      margin-block: ${spacing ? `${spacing * 8}px` : '0'};

      @media (min-width: ${`${d.xs}px`}) and (max-width: ${`${d.sm}px`}) {
        margin-inline: ${`-${p.xs}px`};
      }

      @media (min-width: ${`${d.sm + 1}px`}) and (max-width: ${`${d.md}px`}) {
        margin-inline: ${`-${p.sm}px`};
      }

      @media (min-width: ${`${d.md + 1}px`}) and (max-width: ${`${d.lg}px`}) {
        margin-inline: ${`-${p.md}px`};
      }

      @media (min-width: ${`${d.lg}px`}) {
        margin-inline: ${`-${p.lg}px`};
      }
      ${customStyles ?? {}}
    `
  },
)
