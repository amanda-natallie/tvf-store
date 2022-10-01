import { grid, DefaultTheme } from 'theme'
import styled, { css, ThemeProps } from 'styled-components'
import { ContainerProps } from './container'

type StyledContainerProps = Partial<ContainerProps & ThemeProps<DefaultTheme>>

export const StyledContainer = styled('div')(
  ({ spacing, fluid, theme, customStyles }: StyledContainerProps) => {
    const d = theme?.gridSystem?.breakpoints ?? grid.breakpoints
    const p = theme?.gridSystem?.paddings ?? grid.paddings
    const m = theme?.gridSystem?.margins ?? grid.margins

    const defaultWidth = (size?: keyof typeof p) => {
      if (!size) {
        return '100%'
      }
      return `calc(100vw - ${m[size] * 2}px)`
    }

    const defaultPadding = (size: string) => {
      if (spacing) {
        return `${spacing * 8}px`
      }
      return `${size ? p[size as keyof typeof p] : p.lg}px`
    }
    return css`
      display: flex;
      flex-direction: column;
      margin: 0 auto;

      @media (min-width: ${`${d.xs}px`}) and (max-width: ${`${d.sm}px`}) {
        padding: ${!fluid ? defaultPadding('xs') : `${p.xs / 4}px`};
        width: ${defaultWidth('xs')};
        max-width: ${fluid ? defaultWidth() : `${d.sm}px`};
      }

      @media (min-width: ${`${d.sm + 1}px`}) and (max-width: ${`${d.md}px`}) {
        padding: ${defaultPadding('sm')};
        width: ${defaultWidth('sm')};
        max-width: ${fluid ? defaultWidth() : `${d.md}px`};
      }

      @media (min-width: ${`${d.md + 1}px`}) and (max-width: ${`${d.lg}px`}) {
        padding: ${defaultPadding('md')};
        width: ${defaultWidth('md')};
        max-width: ${fluid ? defaultWidth() : `${d.lg}px`};
      }

      @media (min-width: ${`${d.lg}px`}) {
        padding: ${defaultPadding('lg')};
        width: ${defaultWidth('lg')};
        max-width: ${fluid ? defaultWidth() : `${d.xl - 1}px`};
      }
      ${customStyles ?? {}}
    `
  },
)
