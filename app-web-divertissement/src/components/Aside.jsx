import { Link, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { TbMovie } from "react-icons/tb";
import { MdMovie } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { PiTelevision } from "react-icons/pi";
import '../App.css'

export default function Aside() {
const location = useLocation()

  return (
    <div className="bg-[#171d2f] flex lg:flex-row sm:flex-col lg:h-[650px] lg:rounded-2xl md:rounded-2xl p-5 flex-wrap">
  <nav className="flex-col-nav flex lg:flex-col items-center justify-between">
    <div>
      <p className="flex text-[#fc4544] justify-center text-[30px] h-1/3"><MdMovie /></p>
    </div>
    <div className="flex lg:flex-col gap-mobile sm:flex-row sm:gap-5 lg:gap-5 xl:gap-5">
    <Link
        to="/"
        className={`mx-2 font-size-mobile lg:text-[25px] sm:text-[25px] text-white ${location.pathname === '/' && ' text-[#b64f4f]'}`}
      >
        <HiMiniSquares2X2 />
      </Link>
      <Link
        to="/categories/Movie"
        className={`mx-2 font-size-mobile lg:text-[25px] sm:text-[25px] text-white ${location.pathname === '/categories/Movie' && 'font-semibold text-[#b64f4f]'}`}
      >
        <TbMovie />
      </Link>
      <Link
        to="/categories/Serie"
        className={`mx-2 font-size-mobile lg:text-[25px] sm:text-[25px] text-white ${location.pathname === '/categories/Serie' && 'font-semibold text-[#b64f4f]'}`}
      >
        <PiTelevision />
      </Link>
      <Link
        to="/categories/Favoris"
        className={`mx-2 font-size-mobile lg:text-[25px] sm:text-[25px] text-white ${location.pathname === '/categories/Favoris' && 'font-semibold text-[#b64f4f]'}`}
      >
        <FaBookmark />
      </Link>
    </div>
    <div>
      <p className="text-[25px]">😎</p>
    </div>
  </nav>
  <Outlet />
</div>

  )
}