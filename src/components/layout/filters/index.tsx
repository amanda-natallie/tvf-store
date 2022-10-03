import { Col, Row, Select } from 'components/general'
import { useEffect, useState } from 'react'
import { RootState, useAppDispatch, useAppSelector } from 'store'
import { setProducts } from 'store/slices'
import { IProduct } from 'store/types'

const FILTER_VALUES = {
  HIGUEST_PRICE: 'highestPrice',
  LOWEST_PRICE: 'lowestPrice',
  TITLE_ASC: 'titleAsc',
  TITLE_DESC: 'titleDesc',
}

const Filters = () => {
  const { products } = useAppSelector((state: RootState) => state.productsState)
  const [orderBy, setOrderBy] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (orderBy && products) {
      const productsToSort = [...products]
      let sortedProducts: IProduct[] = []
      switch (orderBy) {
        case FILTER_VALUES.TITLE_ASC:
          sortedProducts = productsToSort.sort((a, b) => (a.title > b.title ? 1 : -1))
          break
        case FILTER_VALUES.TITLE_DESC:
          sortedProducts = productsToSort.sort((a, b) => (a.title < b.title ? 1 : -1))
          break
        case FILTER_VALUES.HIGUEST_PRICE:
          sortedProducts = productsToSort.sort(
            (a, b) =>
              Math.max(...b.variants.map(v => Math.round(parseFloat(v.price)))) -
              Math.max(...a.variants.map(v => Math.round(parseFloat(v.price)))),
          )
          break
        case FILTER_VALUES.LOWEST_PRICE:
          sortedProducts = productsToSort.sort(
            (a, b) =>
              Math.min(...a.variants.map(v => Math.round(parseFloat(v.price)))) -
              Math.min(...b.variants.map(v => Math.round(parseFloat(v.price)))),
          )
          break
        default:
          sortedProducts = productsToSort
          break
      }
      dispatch(setProducts({ products: sortedProducts }))
    }
  }, [orderBy, dispatch])

  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={4} style={{ paddingInline: 0, paddingTop: 0 }}>
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
  )
}

export default Filters
