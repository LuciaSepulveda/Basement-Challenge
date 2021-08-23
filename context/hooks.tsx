import React from "react"

import UserContext, {Context} from "./context"

export function useStatus(): Context["state"]["status"] {
  const {
    state: {status},
  } = React.useContext(UserContext)

  return status
}

export function useCart(): Context["state"]["cart"] {
  const {
    state: {cart},
  } = React.useContext(UserContext)

  return cart
}

export function useCountProducts(): Context["state"]["countProducts"] {
  const {
    state: {countProducts},
  } = React.useContext(UserContext)

  return countProducts
}

export function useTotal(): Context["state"]["total"] {
  const {
    state: {total},
  } = React.useContext(UserContext)

  return total
}

export function useAddProductCart(): Context["actions"]["addProductCart"] {
  const {
    actions: {addProductCart},
  } = React.useContext(UserContext)

  return addProductCart
}

export function useRemoveProductCart(): Context["actions"]["addProductCart"] {
  const {
    actions: {removeProductCart},
  } = React.useContext(UserContext)

  return removeProductCart
}

export function useChangeStatus(): Context["actions"]["changeStatus"] {
  const {
    actions: {changeStatus},
  } = React.useContext(UserContext)

  return changeStatus
}

export function useCartOpen(): Context["state"]["cartOpen"] {
  const {
    state: {cartOpen},
  } = React.useContext(UserContext)

  return cartOpen
}

export function useChangeOpenCart(): Context["actions"]["changeOpenCart"] {
  const {
    actions: {changeOpenCart},
  } = React.useContext(UserContext)

  return changeOpenCart
}

export function useRemoveAllProducts(): Context["actions"]["removeAllProducts"] {
  const {
    actions: {removeAllProducts},
  } = React.useContext(UserContext)

  return removeAllProducts
}
