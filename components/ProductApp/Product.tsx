import {NextPage} from "next"
import Image from "next/image"
import React from "react"

import {Product} from "../../product/types"
import shirt from "../../public/products/shirt.png"
import cap from "../../public/products/cap.png"
import hoodie from "../../public/products/hoodie.png"
import {useAddProductCart, useCart} from "../../context/hooks"
import addToCart from "../../public/addToCart.svg"
import addCart from "../../public/addCart.svg"

interface Props {
  product: Product
}

const ProductApp: NextPage<Props> = ({product}) => {
  const addProductCart = useAddProductCart()
  const [onHover, setOnHover] = React.useState<boolean>(false)
  const cart = useCart()
  let url = cap

  if (product.name === "Black hoodie") {
    url = hoodie
  }

  if (product.name === "Black t-shirt") {
    url = shirt
  }

  return (
    <div
      className="max-w-product"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="flex flex-col justify-center items-center mx-2 relative bg-blend-multiply">
        <div className="max-w-image max-h-image bg-productGradient relative">
          {onHover && (
            <>
              <div className="absolute w-full h-full bg-black opacity-50 z-10" />
              <div className="absolute h-full w-full z-20 ">
                <button
                  className="w-full z-20 relative top-1/2"
                  onClick={() => addProductCart(product)}
                >
                  <div className="z-30 filter drop-shadow-image absolute top-1/2 left-2 right-2">
                    <Image alt="Text add to cart" src={addToCart} />
                  </div>
                  <div className="z-20 absolute -top-14 left-2 right-2">
                    <Image
                      alt="Logo add to cart"
                      className="z-20"
                      height="125px"
                      src={addCart}
                      width="125px"
                    />
                  </div>
                </button>
              </div>
            </>
          )}
          <Image
            alt="black"
            className="absolute w-20 filter drop-shadow-image"
            height="1000"
            src={url}
          />
        </div>
        <div className="w-full h-px bg-white" />
        <div className="flex flex-row w-full mt-2">
          <p className="flex-auto text-product font-bold leading-product text-left">
            {product.name}
          </p>
          <p className="flex-auto text-product font-bold leading-product text-right">
            {`$ ` + product.price}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductApp
