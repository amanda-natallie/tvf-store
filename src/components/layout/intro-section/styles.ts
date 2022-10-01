import { Flexbox } from 'components/general'
import styled from 'styled-components'

export const StyledIntroSection = styled(Flexbox)`
  height: 35vh;
  position: relative;
  & > div {
    width: 100% !important;
    height: 100% !important;
  }
  & video {
    object-fit: cover;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
  }
`
