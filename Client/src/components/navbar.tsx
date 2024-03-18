import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <>
      <div className='p-4  py-6 flex justify-between items-center'>
        <div className='mx-4 flex text-[2vmax] text-[#071A45] font-thin'>
          <p className='font-bold mr-2'>XYZ</p>INDUSTRIES
        </div>
        <div className='lg:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? (
              // Close icon
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className='lg:hidden flex text-white rounded-[20px] flex-col bg-[#071A45] absolute py-4 top-[10%] w-[90%]  items-center list-none'>
              <li>Home</li>
              <li>About Us</li>
              <li>Property</li>
              <li>Service</li>
              <li>Contact</li>
              <button >Sign Up</button>
              <button >Sign In</button>
            
          </div>
        )}
        <div className='hidden lg:flex justify-between w-[60%] mr-8'>
          <div className='w-[40%] p-2 flex list-none justify-evenly rounded-[25px] bg-[#071A45] text-white font-thin py-3'>
            <li>Home</li>
            <li>About Us</li>
            <li>Property</li>
            <li>Service</li>
            <li>Contact</li>
          </div>
          <div>
            <button className='mr-4 border-2 px-3 border-[#071A45] rounded-[20px] p-1'>Sign Up </button>
            <button className='px-3 bg-[#3A7DFF] text-white rounded-[20px] p-2'>Sign In</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
