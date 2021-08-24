import Image from "next/image"

import footer from "../../public/footer.svg"

const Footer = () => {
  return (
    <div className="m-auto flex justify-center w-11/12 mt-6 md:mt-0 max-w-screen-2xl">
      <Image alt="Logo Wear Everyday" className="m-auto" src={footer} />
    </div>
  )
}

export default Footer
