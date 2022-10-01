import { Col, Container, Flexbox, Row, Typography } from 'components/general'
import { StyledHeaderWrapper, StyledBrand } from './styles'
import BrandLogo from 'assets/images/brand.png'
import { Button } from 'components/general/button'

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Container>
        <Row justifyContent="space-between">
          <Col noPadding>
            <StyledBrand src={BrandLogo} alt="Brand Logo" />
          </Col>
          <Col noPadding>
            <Flexbox
              justifyContent="flex-end"
              width="320px"
              noPadding
              flexDirection="row"
              gap="20px"
            >
              <Typography variant="body" size="normal" as="span">
                € 0,00
              </Typography>
              <Button iconButton>02</Button>
            </Flexbox>
          </Col>
        </Row>
      </Container>
    </StyledHeaderWrapper>
  )
}

export default Header
