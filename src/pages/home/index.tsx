import { Col, Container, Header, IntroSection, Loader, Row, Typography } from 'components'
import { useEffect } from 'react'
import { useGetProductsQuery } from 'store/api'
import { StyledMainWrapper } from './styles'

const Home = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery()
  const products = data?.products

  useEffect(() => {
    isError && console.log({ error })
  }, [isError, error])

  return (
    <StyledMainWrapper>
      {isLoading ? (
        <Loader fullScreen />
      ) : (
        <>
          <Header />
          <IntroSection />
          <Container>
            <Row>
              {products?.map(product => (
                <Col xs={12} lg={3} key={product.id}>
                  {product.title}
                </Col>
              ))}
            </Row>
            <Row>
              <Col xs={12} lg={3}>
                <Typography variant="heading" size="h1">
                  oi <Loader size="20px" as="span" />
                </Typography>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </StyledMainWrapper>
  )
}

export default Home
