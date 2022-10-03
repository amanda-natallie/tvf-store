import { Dialog, Flexbox, Input, Typography } from 'components/general'
import { Button } from 'components/general/button'
import { StyledActions } from 'components/general/dialog/styles'
import { useMediaQuery } from 'hooks'
import { FC } from 'react'
import { toast } from 'react-toastify'
import { RootState, useAppDispatch, useAppSelector } from 'store'
import { resetDialogInfo, setCartProducts, setDialogOpen } from 'store/slices'
import { ICartProduct, IProduct, IProductVariant } from 'store/types'
import { pxToRem } from 'utils'
import { ICustomProductVariant } from '../product-list'

interface IProductDetailsProps {
  currentVariant: ICustomProductVariant | null
  setCurrentVariant: (variant: ICustomProductVariant | null) => void
  quantity: number
  setQuantity: (quantity: number) => void
  getVariantDetails: () => IProductVariant | undefined
}

const ProductDetails: FC<IProductDetailsProps> = ({
  currentVariant,
  setCurrentVariant,
  quantity,
  setQuantity,
  getVariantDetails,
}) => {
  const {
    productsState: { currentProduct },
    cartState: { products: cartProducts },
  } = useAppSelector((state: RootState) => state)

  const dispatch = useAppDispatch()
  const isMobile = useMediaQuery(768)

  const handleAddToCart = (product: IProduct) => {
    const variant = getVariantDetails() as IProductVariant
    const cartInfo: ICartProduct = {
      id: product.id,
      idVariant: variant.id,
      variant: variant.title,
      title: product.title,
      price: parseInt(variant.price as string) * quantity,
      quantity,
    }

    // if item already exists in cart, update quantity
    const existingProduct = cartProducts?.find(
      cartProduct =>
        cartProduct.id === product.id &&
        getVariantDetails()?.title === cartProduct.variant,
    )
    if (existingProduct) {
      const updatedCartProducts = cartProducts?.map(cartProduct => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
            price:
              parseInt(getVariantDetails()?.price as string) * quantity +
              cartProduct.price,
          }
        }
        return cartProduct
      })
      dispatch(setCartProducts({ products: updatedCartProducts }))
    }

    // if item does not exist in cart, add it
    else {
      const existingProducts = cartProducts || []
      dispatch(setCartProducts({ products: [...existingProducts, cartInfo] }))
    }

    toast.success(`The ${product.title} has been added to your cart.`, {
      position: 'bottom-right',
    })
    dispatch(setDialogOpen(false))
    dispatch(resetDialogInfo())
    setCurrentVariant(null)
    setQuantity(1)
  }

  return (
    <Dialog alignItems="flex-start" width={!isMobile ? '45vw' : '100%'} noWrap={isMobile}>
      <Flexbox noPadding gap={pxToRem(32)} fullWidth>
        {currentProduct?.options.map((option, index) => (
          <Flexbox
            fullWidth
            noPadding
            key={index}
            alignItems={!isMobile ? 'center' : 'flex-start'}
            justifyContent="flex-start"
            flexDirection={!isMobile ? 'row' : 'column'}
            gap={pxToRem(8)}
          >
            <Typography variant="heading" size="h4">
              {option.name}:&nbsp;
            </Typography>
            {option.values.map((value, i) => (
              <Input
                key={i}
                label={value}
                type="radio"
                name={option.name}
                value={value}
                checked={currentVariant?.[option.name] === value}
                onChange={() =>
                  setCurrentVariant({ ...currentVariant, [option.name]: value })
                }
              />
            ))}
          </Flexbox>
        ))}
        <Flexbox
          fullWidth
          noPadding
          alignItems="center"
          justifyContent="space-between"
          flexDirection="row"
          gap={pxToRem(8)}
        >
          <Input
            label="Quantity"
            type="number"
            name="quantity"
            value={quantity}
            onChange={e => setQuantity(parseInt(e.target.value))}
          />

          <Typography variant="heading" size="h3">
            Total: ${parseFloat(getVariantDetails()?.price || '0') * quantity}
          </Typography>
        </Flexbox>
      </Flexbox>
      <StyledActions>
        <Button variant="outlined" onClick={() => dispatch(setDialogOpen(false))}>
          Cancel
        </Button>

        <Button
          onClick={() => currentVariant && handleAddToCart(currentProduct as IProduct)}
          disabled={!currentVariant}
        >
          Add to cart
        </Button>
      </StyledActions>
    </Dialog>
  )
}

export default ProductDetails
