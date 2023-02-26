import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState('12:00');
    const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center justify-center pt-12 px-12  ">

      <img
        src="https://img.freepik.com/free-photo/apples-table_144627-6739.jpg?w=900&t=st=1677313100~exp=1677313700~hmac=253d0da2191e774bde686d45ac798f31634818d5a79d3397a316022b9347becf"
        alt=""
        className="w-full h-60 object-cover "
      />
      <h1 className="text-4xl font-bold mt-8 mb-4">Book Table</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <h2 className="text-lg mb-2 font-semibold">Date</h2>
          <DatePicker
            className="border border-gray-400 rounded p-2 w-full"
            selected={date}
          onChange={(newDate) => setDate(newDate)}
            dateFormat="yyyy/MM/dd"
            minDate={new Date()}
          />
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg mb-2 font-semibold">Time</h2>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="time"
            defaultValue="12:00"
            min="11:00"
            max="23:00"
            step="1800"
          />
        </div>
        <div className="w-full md:w-1/3">
          <h2 className="text-lg mb-2 font-semibold">Party size</h2>
          <input
            className="border border-gray-400 rounded p-2 w-full"
            type="number"
            defaultValue="2"
            min="1"
            max="10"
          />
        </div>
      </div>
      <button onClick={()=>navigate("/reserve")} className="bg-yellow-500 py-2 px-4 mt-8 rounded-lg text-white font-semibold hover:bg-yellow-600 transition-colors duration-300">
        BOOK NOW
        </button>
    </div>
  );
};

export default Reservation;
