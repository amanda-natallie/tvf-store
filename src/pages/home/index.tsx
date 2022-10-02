import { Col, Container, Header, IntroSection, Loader, Row, Select } from 'components'
import { useEffect, useState } from 'react'
import { useGetProductsQuery } from 'store/api'
import { IProduct } from 'store/types'
import { StyledMainWrapper } from './styles'

const FILTER_VALUES = {
  HIGUEST_PRICE: 'highestPrice',
  LOWEST_PRICE: 'lowestPrice',
  TITLE_ASC: 'titleAsc',
  TITLE_DESC: 'titleDesc',
}

const Home = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery()

  const [orderBy, setOrderBy] = useState('')
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    isError && console.log({ error })
  }, [isError, error])

  useEffect(() => {
    if (data) {
      setProducts(data?.products)
    }
  }, [data])

  useEffect(() => {
    if (orderBy && data) {
      const productsToSort = [...products]
      let sortedProducts: IProduct[] = []
      switch (orderBy) {
        case FILTER_VALUES.TITLE_ASC:
          sortedProducts = productsToSort.sort((a, b) => (a.title > b.title ? 1 : -1))
          break
        case FILTER_VALUES.TITLE_DESC:
          sortedProducts = productsToSort.sort((a, b) => (a.title < b.title ? 1 : -1))
          break
        default:
          break
      }
      setProducts(sortedProducts)
    }
  }, [orderBy, data])

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
              <Col xs={12} sm={12} md={7} lg={9}>
                <Container fluid>
                  <Row noPadding>
                    <Col
                      xs={12}
                      sm={12}
                      md={6}
                      lg={4}
                      customStyles={{ paddingBlock: '0 !important' }}
                    >
                      <Select
                        options={[
                          { value: FILTER_VALUES.TITLE_ASC, label: 'Title [A-Z]' },
                          { value: FILTER_VALUES.TITLE_DESC, label: 'Title [Z-A]' },
                          { value: FILTER_VALUES.LOWEST_PRICE, label: 'Lowest Price' },
                          { value: FILTER_VALUES.HIGUEST_PRICE, label: 'Highest Price' },
                        ]}
                        name="sort"
                        placeholder="Order by"
                        value={orderBy}
                        setValue={setOrderBy}
                      />
                    </Col>
                  </Row>
                  <Row noPadding>
                    {products?.map(product => (
                      <Col xs={12} lg={3} key={product.id}>
                        {product.title}
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
              <Col xs={12} sm={12} md={5} lg={3}>
                <h2>sidebar</h2>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </StyledMainWrapper>
  )
}

export default Home
