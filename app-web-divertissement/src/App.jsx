import {BrowserRouter, Routes, Route} from "react-router-dom"
import Aside from './components/Aside'
import './App.css'
import All from './categories/All'
import Movie from "./categories/Movie"
import Serie from './categories/Serie'
import Favoris from "./categories/Favoris"

function App() {
  

  return (
    <div className="flex p-8">

      <BrowserRouter>
      <Aside />
        <Routes>
          <Route path="/"/>

            <Route path="categories/All" element={<All />}/>
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
