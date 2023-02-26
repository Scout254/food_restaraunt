import React from 'react'
import data from '../constants/data'
const Dessert = () => {
  const {dessert} = data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {dessert.map((item)=>(
      <div key={item.id} className="relative overflow-hidden rounded-md shadow-lg">
        <img src={item.image} alt="" className="w-full h-48 object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-40 transition duration-500 ease-in-out opacity-0 hover:opacity-100 flex flex-col justify-center items-center">
          <h2 className="text-white text-2xl font-bold mb-2">{item.name}</h2>
          <h2 className="text-white text-xl mb-2">${item.price}</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">Buy Now</button>
        </div>
      </div>
    ))}
  </div>
  
  )
}

export default Dessert