import { IoSearchOutline } from "react-icons/io5";

export default function All() {
  return (
    <section className="m-6 pb-10">
        <div className="flex items-center gap-4 text-[18px] pb-10">
          <p className="text-[25px] text-slate-50"><IoSearchOutline /></p>
          <input type="text" placeholder="Search for movies or TV series" className="w-96 outline-none bg-transparent" />
        </div>
        <h1 className="text-3xl text-slate-200">Trending</h1>
    </section>
  )
}