import React from 'react';

const Banner = () => {
  return (
   <div className='px-[10px]'>
     <div className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/uzbek-homemade-pilaf_127425-146.jpg?w=740')" }}>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="text-center text-white transform hover:-translate-y-1 hover:scale-110 transition-all duration-300 z-10 relative">
    <h1 className="text-4xl font-bold mb-4">Best restaurant in town</h1>
    <p className="mb-8">We provide the best food in town. We offer home delivery and dine-in services.</p>
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full mr-4 transition-colors duration-300 shadow-lg">Order Now</button>
    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-lg">Reservation</button>
  </div>
  <div className="absolute bottom-0 left-0 right-0 mb-8">
    
  </div>
</div>
   </div>

  );
};

export default Banner;
