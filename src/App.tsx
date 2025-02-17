import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'

import AllCountries from './pages/allcountries/AllCountries'
import CountriInfo from './pages/countriinfo/CountriInfo'
import './App.css'


function App() {

  return (
    <>
      
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AllCountries></AllCountries>}/>
        <Route path='/country/:countryname' element={<CountriInfo/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
