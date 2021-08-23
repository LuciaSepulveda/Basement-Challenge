import type {GetStaticProps, NextPage} from "next"
import React from "react"
import {useMediaQuery} from "react-responsive"

import Body from "../components/BodyApp"
import Footer from "../components/Footer"
import Header from "../components/Header/Header"
import {useCartOpen} from "../context/hooks"
import data from "../product/mock.json"

const Home: NextPage = () => {
  const cartOpen = useCartOpen()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <div className="flex flex-col m-auto">
      {cartOpen && !isPortrait && (
        <>
          <div className="bg-black absolute w-full h-backBlackMd xl:h-backBlack z-20 opacity-70 transition-all" />
          <Header />
          <Body products={data} />
          <Footer />
        </>
      )}
      {cartOpen && isPortrait && <Header />}
      {!cartOpen && (
        <>
          <Header />
          <Body products={data} />
          <Footer />
        </>
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: data,
    },
    revalidate: 100,
  }
}

export default Home
