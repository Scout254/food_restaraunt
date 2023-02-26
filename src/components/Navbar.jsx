import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-between py-4 px-8 bg-gray-100 sticky top-0 z-50'>
  <div>
   <Link to="/"> <h2 className="text-xl font-bold">FOODS</h2></Link>
  </div>
  <div>
    <ul className='flex space-x-4 text-gray-500 font-medium'>
      <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
      <li><Link to="/menu" className="hover:text-gray-700">Menu</Link></li>
      <li><Link to="/reservation" className="hover:text-gray-700">Reservation</Link></li>
      <li><Link to="/order" className="hover:text-gray-700">Order Online</Link></li>
      <li><Link to="/contact" className="hover:text-gray-700">Contact us</Link></li>
    </ul>
  </div>
  <div className='flex items-center space-x-4'>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full">
      Login
    </button>
    <img src="https://cdn-icons-png.flaticon.com/128/833/833314.png" alt="" 
         className='h-10 w-10 object-contain cursor-pointer'
         onClick={()=>navigate("/cart")}
    />
  </div>
</div>

  )
}

export default Navbar