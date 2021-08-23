export interface Product {
  id: string
  name: string
  description: string
  price: number
}

export interface Buy {
  product: Product
  count: number
}

export interface Cart {
  products: Buy[]
}

export enum Status {
  loading = "loading",
  ready = "ready",
  update = "update",
}

export interface Size {
  size: string
  touch: boolean
}

export const sizesShirt: Size[] = [
  {size: "S", touch: false},
  {size: "M", touch: true},
  {size: "L", touch: false},
  {size: "XL", touch: false},
]

export const sizesHoodie: Size[] = [
  {size: "S", touch: false},
  {size: "M", touch: false},
  {size: "L", touch: true},
  {size: "XL", touch: false},
]

export const sizesCap: Size[] = [
  {size: "S", touch: true},
  {size: "M", touch: false},
  {size: "L", touch: false},
  {size: "XL", touch: false},
]
