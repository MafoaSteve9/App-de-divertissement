import {BrowserRouter, Routes, Route} from "react-router-dom"
import Aside from './components/Aside'
import './App.css'
import All from './categories/All'
import Movie from "./categories/Movie"
import Serie from './categories/Serie'
import Favoris from "./categories/Favoris"

function App() {
  

  return (
    <div className=" mobile-responsive flex lg:p-8 md:m-5 xl:p-8 sm:flex-col md:flex-col lg:flex-row xl:flex-row">

      <BrowserRouter>
      <Aside />
        <Routes>
          

            <Route path="/" element={<All />}/>
            <Route path="categories/Movie" element={<Movie />}/>
            <Route path="categories/Serie" element={<Serie />}/>
            <Route path="categories/Favoris" element={<Favoris />}/>
            

          {/* </Route> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
