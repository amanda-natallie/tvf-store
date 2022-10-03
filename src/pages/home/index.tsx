import {
  CartDetails,
  Col,
  Container,
  Filters,
  Header,
  IntroSection,
  Loader,
  ProductList,
  Row,
} from 'components'
import { useEffect } from 'react'
import { RootState, useAppSelector } from 'store'
import { useLazyGetProductsQuery } from 'store/api'
import { StyledMainWrapper } from './styles'

const Home = () => {
  const { products } = useAppSelector((state: RootState) => state.productsState)
  const [getProducts, { isError, error, isLoading }] = useLazyGetProductsQuery()

  const fetchProducts = async () => {
    try {
      await getProducts()
    } catch (error) {
      console.error('rejected', error)
    }
  }

  useEffect(() => {
    isError && console.log({ error })
  }, [isError, error])

  useEffect(() => {
    if (!products.length) {
      fetchProducts()
    }
  }, [products, getProducts])

  return (
    <StyledMainWrapper>
      {isLoading ? (
        <Loader fullScreen />
      ) : (
        <>
          <Header />
          <IntroSection />
          <Container as="main" style={{ paddingTop: 0 }}>
            <Row alignItems="flex-start">
              <Col xs={12} sm={12} md={8} lg={9} style={{ paddingTop: 0 }}>
                <Container fluid>
                  <Filters />
                  <ProductList />
                </Container>
              </Col>
              <CartDetails />
            </Row>
          </Container>
        </>
      )}
    </StyledMainWrapper>
  )
}

export default Home
