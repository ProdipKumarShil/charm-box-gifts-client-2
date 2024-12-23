import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div>
      <div className="h-12 bg-black flex justify-center items-center gap-4">
        <p className="text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <p className="font-bold text-white underline">ShopNow</p>
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout