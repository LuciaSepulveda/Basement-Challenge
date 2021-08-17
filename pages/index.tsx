import type {NextPage} from "next"

import Header from "../components/Header/Header"

const Home: NextPage = () => {
  return (
    <div className="h-screen flex felx-col bg-black">
      <Header />
    </div>
  )
}

export default Home
