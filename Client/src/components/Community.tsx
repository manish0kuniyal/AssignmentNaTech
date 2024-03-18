import React from 'react';
import flatimage from "/public/flatimage.png";

function Community() {
  return (
    <div className="relative">
      <img src={flatimage} alt="Flat Image" className="w-full h-auto" />

      <div className="absolute top-[7%] px-8 flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-center lg:text-[10vmin] text-[6vmin] text-[#071A45]  mb-4">
            <b>YOUR</b> TRUSTED <b>PARTNER IN THE FUTURE </b>OF HOUSING</h1>
        <p className="text-gray-900 mx-4 lg:text-[2vmin] text-[1.5vmin]">Our partnerships with governments and local banks ensure that our housing prices are affordable enough for our target market.</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-[12px] flex items-center lg:mt-8">
         <p className='mr-2 lg:text-[2vmin] text-[1.5vmin]'> Join Our Community Today </p>
          <svg fill="#fbfbfb" height="15px" width="15px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#fbfbfb">
            <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Community;
