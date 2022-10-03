import { Col, Container, Flexbox, Paper, Row, Typography } from 'components/general'
import { Button } from 'components/general/button'
import { RootState, useAppDispatch, useAppSelector } from 'store'
import { setCartProducts } from 'store/slices'
import { ICartProduct } from 'store/types'
import { palette } from 'theme'
import { pxToRem } from 'utils'
import { StyledCartBadge, StyledCartCol } from './styles'

const CartDetails = () => {
  const { products } = useAppSelector((state: RootState) => state.cartState)
  const dispatch = useAppDispatch()

  const handleRemoveCartItem = (product: ICartProduct) => {
    const updatedCartProducts = products?.filter(
      p => p.id !== product.id && product.idVariant !== p.idVariant,
    )
    dispatch(setCartProducts({ products: updatedCartProducts }))
  }

  return (
    <StyledCartCol xs={12} sm={12} md={4} lg={3} noPadding>
      <Paper fullWidth fadeIn>
        <Flexbox
          fullWidth
          noPadding
          gap={pxToRem(8)}
          alignItems="center"
          flexDirection="row"
          customStyles={{ marginBottom: pxToRem(26) }}
        >
          <Typography variant="heading" size="h2">
            CART
          </Typography>
          <StyledCartBadge>{products?.length ?? 0}</StyledCartBadge>
        </Flexbox>
        {products?.length ? (
          products.map((product, index) => (
            <Flexbox
              noPadding
              fullWidth
              key={index}
              alignItems="center"
              justifyContent="space-between"
              flexDirection="row"
              gap={pxToRem(8)}
              customStyles={{ borderBottom: `1px solid ${palette.grayScale[400]}` }}
            >
              <Container fluid>
                <Row>
                  <Col
                    xs={6}
                    sm={6}
                    md={8}
                    lg={8}
                    noPadding
                    justifyContent="flex-start"
                    gap={pxToRem(12)}
                  >
                    <Typography variant="heading" size="h4">
                      {product.title} x {product.quantity}
                    </Typography>
                    <Typography
                      variant="body"
                      size="normal"
                      colorScheme={{
                        type: 'system',
                        color: 'info',
                      }}
                    >
                      {product.variant}
                    </Typography>
                  </Col>
                  <Col
                    xs={6}
                    sm={6}
                    md={4}
                    lg={4}
                    alignItems="flex-end"
                    gap={pxToRem(12)}
                    customStyles={{ padding: `0 ${pxToRem(46)} 0 0 !important` }}
                  >
                    <Typography variant="heading" size="h3">
                      <>{product.price}€</>
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleRemoveCartItem(product)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Flexbox>
          ))
        ) : (
          <Typography variant="body" size="normal">
            No products in cart
          </Typography>
        )}
      </Paper>
    </StyledCartCol>
  )
}

export default CartDetails
