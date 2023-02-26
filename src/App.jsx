import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Cart, Contact, Home, Login, Menu, Order, Reservation } from './pages'
import { Footer, Navbar, ReservationDetails } from './components'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/reserve' element={<ReservationDetails/>}/>
      </Routes>
     
    </div>
  )
}

export default App