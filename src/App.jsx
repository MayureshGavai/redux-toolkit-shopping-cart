import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Cart from './components/Cart';

const App = () => {
  
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App