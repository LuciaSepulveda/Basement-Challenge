import React from "react"

import {Cart, Buy, Product, Status} from "../product/types"

export interface Context {
  state: {
    status: Status
    cart: Cart
    countProducts: number
    total: number
    cartOpen: boolean
  }
  actions: {
    addProductCart: (product: Product) => void
    changeStatus: (status: Status) => void
    removeProductCart: (product: Product) => void
    changeOpenCart: () => void
    removeAllProducts: () => void
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({children}) => {
  const [status, setStatus] = React.useState<Status>(Status.loading)
  const [products, setProducts] = React.useState<Buy[]>([])
  const [countProducts, setCountProducts] = React.useState<number>(0)
  const [total, setTotal] = React.useState<number>(0)
  const [cartOpen, setCartOpen] = React.useState<boolean>(false)
  const cart: Cart = {
    products: products,
  }

  React.useEffect(() => {
    if (status === "loading") {
      let carrito

      let check = localStorage.getItem("Cart")

      if (check !== null) {
        carrito = JSON.parse(localStorage.getItem("Cart") || "{}")

        if (carrito !== {} && carrito !== null) {
          let array: Buy[] = carrito.products

          for (let i = 0; i !== array.length; i++) {
            if (array[i].count !== 0) {
              products.push(array[i])
            }
          }
        }
      } else {
        setProducts([])
      }

      setStatus(Status.update)
    }
  }, [status, total, countProducts, products])

  React.useEffect(() => {
    return
  }, [cart])

  const saveCartLocalStorage = () => {
    localStorage.setItem("Cart", JSON.stringify(cart))
  }

  const handleOpenCart = () => {
    setCartOpen(!cartOpen)
  }

  const handleAddProductCart = (product: Product) => {
    const found = cart.products.find((p) => p.product.name === product.name)

    if (found !== undefined) {
      found.count = found.count + 1
    } else {
      products.push({product: product, count: 1})
    }

    setTotal(total + product.price)
    setCountProducts(countProducts + 1)
    saveCartLocalStorage()
    setStatus(Status.update)
  }

  const handleRemoveProductCart = (product: Product) => {
    const found = cart.products.find((p) => p.product.name === product.name)

    if (found !== undefined) {
      if (found.count === 1) {
        const array = cart.products.filter((p) => p.product.name !== product.name)

        setProducts(array)
      }
      found.count = found.count - 1
    }

    setTotal(total - product.price)
    setCountProducts(countProducts - 1)
    saveCartLocalStorage()
    setStatus(Status.update)
  }

  const handleChangeStatus = (status: Status) => {
    setStatus(status)
  }

  const handleRemoveAllProducts = () => {
    setProducts([])
    setCountProducts(0)
    setTotal(0)
    saveCartLocalStorage()
    setStatus(Status.update)
  }

  if (status === Status.update) {
    let array = cart.products
    let count = 0
    let totalAux = 0

    for (let i = 0; i !== array.length; i++) {
      if (array[i].count !== 0) {
        count = count + array[i].count
        totalAux = totalAux + array[i].count * array[i].product.price
      }
    }

    setCountProducts(count)
    setTotal(totalAux)
    setStatus(Status.ready)
  }

  const state: Context["state"] = {
    cart,
    status,
    countProducts,
    total,
    cartOpen,
  }

  const actions = {
    addProductCart: handleAddProductCart,
    changeStatus: handleChangeStatus,
    removeProductCart: handleRemoveProductCart,
    changeOpenCart: handleOpenCart,
    removeAllProducts: handleRemoveAllProducts,
  }

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>
}

export {UserContext as default, UserProvider as Provider}
