import { Col, Paper } from 'components/general'
import styled from 'styled-components'

export const StyledProductList = styled(Paper)`
  max-width: 100%;
`

export const StyledSwippedImage = styled.img`
  height: 200px;
  object-fit: contain;
  margin: 0 auto;
  display: table;
`
export const StyledCol = styled(Col)`
  max-width: calc(${100 * (4 / 12)}% - 16px);
  margin-bottom: 24px;

  & > div {
    height: 410px;
  }
`
