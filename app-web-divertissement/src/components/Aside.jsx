import { Link, Outlet } from "react-router-dom"
import { TiThSmall } from "react-icons/ti";
import { MdOutlineLocalMovies } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { GoBookmark } from "react-icons/go";
import { PiTelevision } from "react-icons/pi";

export default function Aside() {
  return (
    <div className="bg-[#171d2f] flex justify-between flex-col h-[650px] rounded-[20px] p-5 flex-wrap">
      <div className="h-10">
        <p className="flex text-[#fc4544] justify-center text-[30px] h-1/3"><MdMovie /></p>
      </div>
     <div className="h-1/3">
        <nav className="flex flex-col gap-10 items-center">
            <Link 
            to="/categories/all"
            className="mx-2 font-semibold text-[25px] text-[#fbfafd]"
            > <TiThSmall /></Link>
            <Link 
            to="/categories/movie"
            className="mx-2 font-semibold text-[25px] text-[#fbfafd] "
            ><MdOutlineLocalMovies /></Link>
            <Link 
            to="/categories/serie"
            className="mx-2 font-semibold text-[25px] text-[#fbfafd]"
            ><PiTelevision /></Link>
            <Link 
            to="/categories/favoris"
            className="mx-2 font-semibold text-[25px] text-[#fbfafd]"
            ><GoBookmark /></Link>
        </nav>
        <Outlet />
    </div>
    <div className=" h-1/3 flex justify-end flex-col rounded-[50%] items-center pb-2 text-[20px]">
      <p>😎</p>
    </div>
   </div>
  )
}