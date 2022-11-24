
import { HashRouter, Route, Routes } from 'react-router-dom'
import UserLogin from './components/UserLogin'
import Pokedex from './components/Pokedex'
import PokedexId from './components/PokedexId'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {


  return (
    

      <HashRouter>
        <Routes>
          <Route path='/' element={<UserLogin />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokedex/:id' element={<PokedexId />} />
          </Route>
        </Routes>
      </HashRouter>

   
  )
}

export default App
