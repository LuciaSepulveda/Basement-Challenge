import {NextPage} from "next"
import Image from "next/image"

import {Product} from "../../product/types"
import ProductA from "../ProductApp"
import {useCart} from "../../context/hooks"

interface Props {
  products: Product[]
}

const Body: NextPage<Props> = ({products}) => {
  return (
    <div className="flex flex-col md:flex-row max-w-11/12 justify-center items-center mx-auto md:my-20">
      {products.map((product) => (
        <ProductA key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Body
