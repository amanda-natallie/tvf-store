import { Flexbox, Paper, ProductDetailsDialog, Row, Typography } from 'components'
import { RootState, useAppDispatch, useAppSelector } from 'store'
// import Swiper core and required modules
import { A11y, Navigation, Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import { Button } from 'components/general/button'
import { useState } from 'react'
import { setCurrentProduct, setDialogInfo, setDialogOpen } from 'store/slices'
import { IProduct, IProductVariant } from 'store/types'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/swiper.min.css'
import { pxToRem } from 'utils'
import { StyledCol, StyledSwippedImage } from './styles'
import './swiper.css'

export type ICustomProductVariant = {
  [key: string]: string
}

const ProductList = () => {
  const {
    productsState: { products, currentProduct },
  } = useAppSelector((state: RootState) => state)
  const [currentVariant, setCurrentVariant] = useState<ICustomProductVariant | null>(null)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useAppDispatch()

  const handleOpenDialog = (status: boolean) => {
    if (status) {
      setCurrentVariant(null)
      setQuantity(1)
    }
    dispatch(setDialogOpen(status))
  }

  const getVariantDetails = () => {
    if (currentVariant) {
      const variantsLength = Object.keys(currentVariant).length
      const variantsValue =
        variantsLength === 1
          ? Object.values(currentVariant)[0]
          : Object.values(currentVariant).join(' / ')

      return currentProduct?.variants.find(
        (variant: IProductVariant) => variant.title === variantsValue,
      )
    }
  }

  const handleViewDetails = (product: IProduct) => {
    dispatch(setCurrentProduct(product))
    const dialogInfo = {
      title: 'Add to cart',
      subtitle: `Choose quantity and variant for ${product?.title}`,
    }
    dispatch(setDialogInfo(dialogInfo))
    handleOpenDialog(true)
  }

  const getProductPrice = (product: IProduct) => {
    const minPrice = Math.min(
      ...product.variants.map(v => Math.round(parseFloat(v.price))),
    )
    const maxPrice = Math.max(
      ...product.variants.map(v => Math.round(parseFloat(v.price))),
    )
    if (minPrice === maxPrice) {
      return `${minPrice}€`
    }
    if (product.variants.length === 1) {
      return `${Math.round(parseFloat(product.variants[0].price))}€`
    }
    return `${minPrice}€~${maxPrice}€`
  }

  return (
    <>
      <Row justifyContent="space-between" alignItems="flex-start">
        {products?.map(product => {
          return (
            <StyledCol xs={12} lg={4} key={product.id} noPadding>
              <Paper fadeIn fullWidth withHover gap={pxToRem(16)}>
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                >
                  {product.images.length > 0 ? (
                    product.images.map(image => (
                      <SwiperSlide key={image.id}>
                        <StyledSwippedImage
                          src={image.src}
                          alt={product.title}
                          height="220px"
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <SwiperSlide>
                      <StyledSwippedImage
                        src="https://via.placeholder.com/220x220"
                        alt={product.title}
                        height="220px"
                      />
                    </SwiperSlide>
                  )}
                </Swiper>
                <Flexbox
                  noPadding
                  flexDirection="row"
                  noWrap
                  fullWidth
                  justifyContent="space-between"
                >
                  <Typography variant="heading" size="h5">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="heading"
                    size="h2"
                    customStyles={{ fontWeight: 500 }}
                  >
                    {getProductPrice(product)}
                  </Typography>
                </Flexbox>
                <Flexbox
                  fullWidth
                  noPadding
                  flexDirection="row"
                  justifyContent="space-between"
                  noWrap
                >
                  <Typography variant="body" size="small" gutterVertical={pxToRem(12)}>
                    {product.variants.length} color variants
                  </Typography>
                  <Button variant="outlined" onClick={() => handleViewDetails(product)}>
                    + Add
                  </Button>
                </Flexbox>
              </Paper>
            </StyledCol>
          )
        })}
      </Row>
      <ProductDetailsDialog
        {...{
          currentVariant,
          setCurrentVariant,
          quantity,
          setQuantity,
          getVariantDetails,
        }}
      />
    </>
  )
}

export default ProductList
