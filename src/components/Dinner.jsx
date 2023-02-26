import React from 'react'
import data from '../constants/data'
const Dinner = () => {
  const {dinner} = data;
  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {dinner.map((item)=>(
    <div 
      key={item.id} 
      className="relative overflow-hidden rounded-lg shadow-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <img 
        className="w-full h-56 object-cover object-center transition-all duration-300 ease-in-out transform hover:scale-105" 
        src={item.image} 
        alt={item.name} 
      />
      <div className="p-4 transition-all duration-300 ease-in-out transform hover:translate-y-4">
        <h2 className="text-lg font-medium text-gray-800">{item.name}</h2>
        <h3 className="text-base font-medium text-gray-500 mb-2">{item.desc}</h3>
        <h4 className="text-lg font-medium text-gray-700">${item.price}</h4>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md shadow-md transition-all duration-300 ease-in-out transform hover:shadow-lg hover:bg-green-600">
          Buy
        </button>
      </div>
    </div>
  ))}
</div>


  )
}

export default Dinner