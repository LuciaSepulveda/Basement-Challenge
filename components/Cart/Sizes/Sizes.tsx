import React from "react"

import {Size} from "../../../product/types"

interface Props {
  sizes: Size[]
}

const Sizes: React.FC<Props> = ({sizes}) => {
  const [update, setUpdate] = React.useState<boolean>(false)
  const selectSize = (size: Size) => {
    sizes.forEach((elem) => {
      if (elem && elem.size !== size.size) {
        elem.touch = false
      }
    })
    size.touch = true
  }

  React.useEffect(() => {
    if (update === true) {
      setUpdate(false)
    }
  }, [update])

  return (
    <div className="w-full flex flex-row ml-2">
      {sizes.map((elem) => {
        return (
          <>
            {elem.touch && (
              <button
                key={elem.size}
                className="rounded-full w-sizeMobile md:w-size h-sizeMobile md:h-size border text-productDescriptionMobile md:text-productDescription border-white"
              >
                {elem.size}
              </button>
            )}
            {!elem.touch && (
              <button
                key={elem.size}
                className=" w-sizeMobile md:w-size h-sizeMobile md:h-size text-productDescriptionMobile md:text-productDescription"
                onClick={() => {
                  selectSize(elem), setUpdate(true)
                }}
              >
                {elem.size}
              </button>
            )}
          </>
        )
      })}
    </div>
  )
}

export default Sizes
