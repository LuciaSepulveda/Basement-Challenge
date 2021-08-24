import React from "react"
import Image from "next/image"
import {useMediaQuery} from "react-responsive"

import {
  useCart,
  useAddProductCart,
  useRemoveProductCart,
  useTotal,
  useRemoveAllProducts,
} from "../../context/hooks"
import shirt from "../../public/products/shirt.png"
import cap from "../../public/products/cap.png"
import hoodie from "../../public/products/hoodie.png"
import yourCart from "../../public/yourCart.svg"
import yourCartMobile from "../../public/yourCartMobile.svg"
import Spinner from "../Spinner"
import {Size, sizesShirt, sizesHoodie, sizesCap} from "../../product/types"

import Sizes from "./Sizes"

interface Props {
  closeCart: () => void
}

const Cart: React.FC<Props> = ({closeCart}) => {
  const cart = useCart()
  const addProductCart = useAddProductCart()
  const removeProductCart = useRemoveProductCart()
  const total = useTotal()
  const [update, setUpdate] = React.useState<boolean>(false)
  const [textCart, setTextCart] = React.useState<string>("Cart is empty")

  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  let sizes: Size[] = sizesCap

  React.useEffect(() => {
    if (update === true) {
      setUpdate(false)
    }
  }, [update])

  return (
    <div className="flex flex-col md:border-l-2 absolute top-0 -right-0 z-20 min-h-full w-screen md:w-cart md:min-h-cart bg-black md:animate-cart">
      <div className="flex flex-row-reverse mr-4 mt-4 mb-4">
        <button className="text-closeMobile md:text-close mr-4" onClick={closeCart}>
          &rarr; CLOSE
        </button>
      </div>
      <div className="flex-1 w-full items-center m-auto justify-center">
        {isPortrait && <Image alt="Your cart" src={yourCartMobile} />}
        {!isPortrait && <Image alt="Your cart" src={yourCart} />}
      </div>
      {update && (
        <div className="justify-center m-auto md:w-yourCart md:h-productCart ">
          <Spinner height="40px" width="40px" />
        </div>
      )}
      {cart.products.length === 0 && (
        <p className="flex-1 md:mt-10 text-total m-auto">{textCart}</p>
      )}
      {!update && (
        <>
          {cart.products.map((buy) => {
            let url = cap

            if (buy.product.name === "Black hoodie") {
              url = hoodie
              sizes = sizesHoodie
            }

            if (buy.product.name === "Black t-shirt") {
              url = shirt
              sizes = sizesShirt
            }

            return (
              <div
                key={buy.product.id}
                className="flex flex-row m-auto mt-2 md:mt-0 h-productCartMobile md:w-yourCart w-11/12 md:h-productCart box-border border border-white"
              >
                <div className="flex m-auto ml-1 bg-productGradient h-imageCartMobile w-imageCartMobile md:w-divImageCart md:h-divImageCart -rotate-180">
                  <Image
                    alt={buy.product.name}
                    className="h-imageCartMobile w-imageCartMobile md:w-divImageCart drop-shadow-image"
                    src={url}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex-1 ml-2 md:ml-4">
                    <p className="text-left text-closeMobile md:text-total uppercase">
                      {buy.product.name}
                    </p>
                    <p className="text-left text-productDescriptionMobile md:text-product text-productDescriptionColor leading-productDescription font-bold">
                      {buy.product.description}
                    </p>
                  </div>
                  <div className="flex-1 justify-end md:mt-20 ml-2 md:ml-4">
                    <div className="flex flex-row items-center">
                      <p className="text-left text-productDescriptionMobile md:text-productDescription">
                        QUANTITY:
                      </p>
                      <div className="flex flex-row ml-2 w-buttonQuantityMobile md:w-buttonQuantity h-buttonQuantityMobile md:h-buttonQuantity rounded-buttonQuantity border border-white">
                        <button
                          className="flex-1 self-center text-productDescriptionMobile md:text-productDescription"
                          onClick={() => {
                            removeProductCart(buy.product), setUpdate(true)
                          }}
                        >
                          -
                        </button>
                        <p className="flex-1 self-center text-productDescriptionMobile md:text-productDescription">
                          {buy.count}
                        </p>
                        <button
                          className="flex-1 self-center text-productDescriptionMobile md:text-productDescription"
                          onClick={() => {
                            addProductCart(buy.product)
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row mt-4 md:mt-2 md:mb-1">
                      <div className="flex flex-row">
                        <p className="flex-1 uppercase text-left text-productDescriptionMobile md:text-productDescription text-white">
                          Size:
                        </p>
                        <Sizes sizes={sizes} />
                      </div>
                      <p className="flex-1 mr-6 uppercase text-left md:text-right text-closeMobile md:text-total">
                        ${buy.product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </>
      )}
      <div className="flex flex-col md:flex-row mt-2 md:mt-24 mb-4 md:mb-0 w-full">
        <div className="flex-1 flex flex-row md:border-2">
          <p className="flex-1 md:flex-initial ml-4 md:ml-2 text-left md:text-justify text-product md:text-total leading-total tracking-total">
            TOTAL:
          </p>
          <p className="flex-1 md:flex-initial ml-2 mr-4 md:mr-0 text-right md:text-justify text-product md:text-total leading-total tracking-total">
            ${total.toFixed(2)}
          </p>
        </div>
        {isPortrait && <div className="bg-white w-11/12 h-px m-auto" />}
        <div className="flex-1 md:border-2">
          <p
            className="text-black mt-2 md:mt-0 ml-2 text-center text-checkoutMobile md:text-total leading-total tracking-total"
            id="TextBorderWhite"
          >
            CHECKOUT
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cart
