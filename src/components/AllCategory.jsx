import React from 'react'
import data from '../constants/data'
const AllCategory = () => {
  const {all} = data;
  return (
    <div className="grid grid-cols-3 gap-4">
    {all.map((item)=>(
      <div key={item.id} className="relative group">
        <img src={item.image} alt="" className="w-full" />
        <h2 className="text-lg font-bold mt-2">{item.name}</h2>
        <h2 className="text-gray-600 mt-1">{item.desc}</h2>
        <h2 className="text-lg font-bold text-green-500 mt-1">${item.price}</h2>
        <button className="absolute bottom-0 left-0 w-full h-full bg-green-500 bg-opacity-50 text-white font-bold text-center rounded py-2 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-4">Buy</button>
      </div>
    ))}
  </div>
  
  )
}

export default AllCategory