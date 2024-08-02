import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing/Landing'
import Createbook from './components/Createbook';
import Deletebook from './components/Deletebook';
import Editbook from './components/Editbook';
import Showbook from './components/Showbook';
// import {Categories} from './components/Categories/Categories';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      

      <Route path='/books' element={<Home/>}></Route>
      <Route path='/books/create' element={<Createbook/>}></Route>
      <Route path='/books/details/:id' element={<Showbook/>}></Route>
      <Route path='/books/edit/:id' element={<Editbook/>}></Route>
       <Route path='/books/delete/:id' element={<Deletebook/>}></Route>


    </Routes>
  )
}

export default App