export default function ModalContent({ closeModal, film }) {
  return (
    <div
      className="fixed inset-0 bg-slate-800/75 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="text-slate-900 rounded bg-gray-800 sm:w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] mx-4 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-1 right-1 w-7 h-7 text-slate-100 rounded flex justify-center items-center font-semibold text-lg"
          onClick={closeModal}
        >
          X
        </button>
        <div className="text-slate-300">
          <div>
            <img className="w-full" src={film.photo} alt="" />
            <h1 className="font-semibold text-slate-300 text-lg ml-8 relative bottom-7">
              {film.title}
            </h1>
          </div>
          <div>
            <ul className="flex gap-4 relative bottom-6 ml-4">
              <li>{film.year}</li>
              <li className="border w-10 h-6 text-center rounded-sm">
                {film.ageRating}
              </li>
              <li>{film.genre}</li>
            </ul>
            <p className="relative bottom-4 ml-4 pb-4 pt-4">{film.synopsis}</p>
            <p className="relative bottom-4 ml-4 pb-4 pt-4">
              Réalisateur: {film.realisateur}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};





