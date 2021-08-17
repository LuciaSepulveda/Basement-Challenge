import Image from "next/image"

import header from "../../public/header.svg"
import logo from "../../public/logo.svg"

const Header = () => {
  return (
    <header className="flex flex-col bg-blue-300 m-auto text-white text-center">
      <div className="flex">
        <p className="text-6xl">b</p>
      </div>
      <Image alt="Basement" src={logo} />
      <h4>Lets get this party started</h4>
      <Image alt="Header" src={header} />
    </header>
  )
}

export default Header
