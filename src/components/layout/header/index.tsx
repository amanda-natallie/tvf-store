import { Col, Container, Flexbox, Row, Typography } from 'components/general'
import { StyledHeaderWrapper, StyledBrand } from './styles'
import BrandLogo from 'assets/images/brand.png'
import { Button } from 'components/general/button'
import { RootState, useAppSelector } from 'store'
import { useMediaQuery } from 'hooks'

const Header = () => {
  const { products } = useAppSelector((state: RootState) => state.cartState)
  const isMobile = useMediaQuery(768)
  return (
    <StyledHeaderWrapper>
      <Container>
        <Row justifyContent="space-between">
          <Col xs={6} noPadding>
            <StyledBrand src={BrandLogo} alt="Brand Logo" />
          </Col>
          <Col xs={6} noPadding alignItems="flex-end">
            <Flexbox
              justifyContent="flex-end"
              width={!isMobile ? '320px' : 'auto'}
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
