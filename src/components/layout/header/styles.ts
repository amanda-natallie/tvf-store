import styled from 'styled-components'
import { shadows } from 'theme'

export const StyledHeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
  height: 80px;
  box-shadow: ${shadows.pressed};
  z-index: 10;
`

export const StyledBrand = styled.img`
  height: 40px;
`
