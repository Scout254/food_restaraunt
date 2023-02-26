import React from 'react'
import data from '../constants/data'
const Lunch = () => {
  const {lunch} = data;
  return (
    <div className="flex flex-wrap justify-center items-center">
    {lunch.map((item) => (
      <div key={item.id} className="w-72 mx-2 my-4 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-gray-600 mt-2">{item.desc}</p>
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-lg font-medium">${item.price}</h2>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Buy</button>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  )
}

export default Lunch