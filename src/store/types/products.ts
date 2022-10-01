export interface IProductVariantFeaturedImage {
  id: number
  product_id: number
  position: number
  created_at: string
  updated_at: string
  alt: string
  width: number
  height: number
  src: string
  variant_ids: number[]
}
export interface IProductVariant {
  id: number
  title: string
  option1: string
  option2: string
  sku: string
  requires_shipping: boolean
  taxable: boolean
  featured_image: IProductVariantFeaturedImage
  available: boolean
  price: string
  grams: number
  compare_at_price: string
  position: number
  product_id: number
  created_at: string
  updated_at: string
}
export interface IProductImages {
  id: number
  created_at: string
  position: number
  updated_at: string
  product_id: number
  variant_ids: number[]
  src: string
  width: number
  height: number
}
export interface IProductOptions {
  name: string
  position: number
  values: string[]
}
export interface IProduct {
  id: number
  title: string
  handle: string
  body_html: string
  published_at: string
  created_at: string
  updated_at: string
  vendor: string
  product_type: string
  tags: string[]
  variants: IProductVariant[]
  images: IProductImages[]
  options: IProductOptions[]
}

export interface IGetProductsResponse {
  products: IProduct[]
}

export interface IProductsState extends IGetProductsResponse {
  loading: boolean
  error: string
}
