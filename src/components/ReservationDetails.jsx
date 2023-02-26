import React, { useState } from 'react'

const ReservationDetails = () => {
    const [occasion, setOccasion] = useState('');
    const occasionOptions = [
        'Birthday',
        'Anniversary',
        'Business Meeting',
        'Casual Dining',
        'Other',
      ];
    
      const handleOccasionChange = (event) => {
        setOccasion(event.target.value);
      };
    
  return (
    <div className="bg-gray-100 p-8">
  <h1 className="text-lg font-bold mb-4">Due to limited availability, we can only hold this table for 5.00 minutes</h1>
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-lg font-bold mb-4">Data order</h1>
    <form>
      <div className="mb-4">
        <input type="text" placeholder="First name" className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Last name" className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
      </div>
      <div className="mb-4">
        <input type="tel" id="phone" name="phone" placeholder="Mobile number" required className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
      </div>
      <div className="mb-4">
        <input type="text" placeholder="Email address" className="border border-gray-300 px-4 py-2 w-full rounded-lg" />
      </div>
      <div className="mb-4">
        <select className="border border-gray-300 px-4 py-2 w-full rounded-lg" value={occasion} onChange={handleOccasionChange}>
          <option value="">Select an Occasion</option>
          {occasionOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
          ))}
        </select>
      </div>
      <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">Confirm Reservation</button>
    </form>
  </div>
  <div className="mt-8">
    <h1 className="text-lg font-bold mb-4">Reservation details</h1>
    <div className="flex items-center mb-4">
      <img src="https://cdn-icons-png.flaticon.com/128/3239/3239948.png" alt="" className="w-10 h-10 mr-4" />
      <h2>Saturday, 28 February 2023</h2>
    </div>
    <div className="flex items-center mb-4">
      <img src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png" alt="" className="w-10 h-10 mr-4" />
      <h2>04:30 PM</h2>
    </div>
    <div className="flex items-center mb-4">
      <img src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png" alt="" className="w-10 h-10 mr-4" />
      <h2>2 People</h2>
    </div>
  </div>
</div>

  )
}

export default ReservationDetails