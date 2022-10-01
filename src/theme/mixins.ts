import { pxToRem } from 'utils'

export const flexPosition = (
  align?: string | false,
  justify?: string | false,
  flexDirection?: string,
): string => `
  display: flex;
  ${align ? `align-items: ${align};` : ''}
  ${justify ? `justify-content: ${justify};` : ''};
  ${flexDirection ? `flex-direction: ${flexDirection};` : ''};
`

export const spacing = (spacing: number): string => pxToRem(spacing * 8)
