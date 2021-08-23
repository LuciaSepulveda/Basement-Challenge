import React from "react"
import Image from "next/image"

import asterisk from "../../public/asterisk.svg"

interface Props {
  width: string
  height: string
}

const Cart: React.FC<Props> = ({width, height}) => {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <div className="animate-spinner" style={{width: `${width}`, height: `${height}`}}>
        <Image alt="Asterisk" src={asterisk} />
      </div>
    </div>
  )
}

export default Cart
