import { Col } from 'components/general'
import styled from 'styled-components'
import { palette } from 'theme'
import { flexPosition } from 'utils'

export const StyledCartCol = styled(Col)`
  margin-top: 6.4rem;
  position: sticky;
  top: 90px;
  right: 0;

  & > div {
    border-top: 6px solid ${palette.primary.light};
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`
export const StyledCartBadge = styled.span`
  ${flexPosition('center', 'center')}
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${palette.primary.light};
  color: ${palette.text.inverted};
`
