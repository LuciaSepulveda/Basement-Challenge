import React from "react"
import Image from "next/image"
import {useMediaQuery} from "react-responsive"

import header from "../../public/header.svg"
import logo from "../../public/logo.svg"
import icon from "../../public/favicon.svg"
import hd from "../../public/hd.svg"
import vector1 from "../../public/vector1.svg"
import vector2 from "../../public/vector2.svg"
import {useCartOpen, useChangeOpenCart, useCountProducts} from "../../context/hooks"
import Cart from "../Cart"

const Header = () => {
  const count = useCountProducts()
  const cartOpen = useCartOpen()
  const changeOpenCart = useChangeOpenCart()

  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  const text = `A man can't have enough basement. swag — A man can't have enough basement. swag — A man can't have enough basement. swag — A man can't have enough basement. swag — A man can't have enough basement. swag`

  return (
    <header className="flex flex-col text-white text-center">
      <div className="flex flex-row m-auto md:p-4 justify-center items-center xl:w-9/12 w-full max-w-screen-2xl">
        <div className="flex-1 flex p-2 xl:ml-1 content-start">
          {isPortrait && <Image alt="logo" height="50px" src={icon} width="50px" />}
          {!isPortrait && <Image alt="logo" src={logo} />}
        </div>
        {!isPortrait && (
          <div className="flex-1 flex justify-center items-center">
            <Image alt="HD 4K" src={hd} />
          </div>
        )}
        <div className="flex-1 flex flex-row-reverse p-2 md:p-0">
          <button
            className=" w-button h-button md:mr-2 mr-1 rounded-button text-button border-2 border-white"
            onClick={() => changeOpenCart()}
          >
            {`CART (${count})`}
          </button>
          {cartOpen && <Cart closeCart={() => changeOpenCart()} />}
        </div>
      </div>
      <div className="relative m-auto xl:w-9/12 w-full max-w-screen-2xl">
        <div className="absolute invisible md:visible -bottom-32 left-6">
          <Image alt="" height="100px" src={vector1} width="100px" />
        </div>
        <Image alt="Header Basement Supply" src={header} />
        <div className="absolute invisible md:visible right-10 -bottom-12">
          <Image alt="" height="100px" src={vector2} width="100px" />
        </div>
      </div>
      <div className="mt-2 md:mt-8 h-textHeader flex flex-col overflow-hidden">
        <div className="h-px bg-white" />
        <p className="md:text-total text-product animate-textMobile md:animate-text whitespace-nowrap">
          {text}
        </p>
        <div className="h-px bg-white" />
      </div>
    </header>
  )
}

export default Header
