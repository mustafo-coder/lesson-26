import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import UpdateProduct from './UpdateProduct'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/update-product/:id' element={<UpdateProduct/>}/>
      </Routes>
    </div>
  )
}

export default App