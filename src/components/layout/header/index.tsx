import { Col, Container, Flexbox, Row, Typography } from 'components/general'
import { StyledHeaderWrapper, StyledBrand } from './styles'
import BrandLogo from 'assets/images/brand.png'
import { Button } from 'components/general/button'
import { RootState, useAppSelector } from 'store'

const Header = () => {
  const { products } = useAppSelector((state: RootState) => state.cartState)
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
                €
                {products ? products.reduce((acc, product) => acc + product.price, 0) : 0}
              </Typography>
              <Button iconButton>{products?.length ?? 0}</Button>
            </Flexbox>
          </Col>
        </Row>
      </Container>
    </StyledHeaderWrapper>
  )
}

export default Header
