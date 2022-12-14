import { keyframes } from 'styled-components'

export const fadeInAnimation = keyframes`
  0% {  
    opacity: 0;
    transform: translate3d(0, -10%, 0); 
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0); 
  }
`
