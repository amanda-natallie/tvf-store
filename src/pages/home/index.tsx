import React from 'react'
import { useGetProductsQuery } from 'store/api'

const Home = () => {
  const { data: products, isLoading, isError, error } = useGetProductsQuery()

  React.useEffect(() => {
    console.log({ ...products })
    isLoading && console.log('loading')
    isError && console.log({ error })
  }, [products, isLoading, isError, error])

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        products &&
        products.products.map(product => <p key={product.id}>{product.title}</p>)}
    </div>
  )
}

export default Home
