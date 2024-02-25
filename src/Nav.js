/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Logo from './images/logo.jpg'
import { Link } from 'react-router-dom';



function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='fixed left-0 top-0 right-0 w-full bg-white z-10'>
      <nav className="Nav p-4 flex justify-center relative items-center">
        <div className='absolute left-5 lg:block md:hidden sm:hidden Logo'>
          <Link to="/">
          <img src={Logo} alt="Logo" className="h-12 rounded-3xl" />
          </Link>
        </div>
        <h1 className={`lg:text-3xl font-bold uppercase md:text-xl sm:text-sm radient`}>Shri Vaibhavi Silks</h1>
        <div className="block lg:hidden absolute right-5">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <div className={`absolute right-5 lg:flex ${isOpen ? 'block' : 'hidden'} nav-links`}>
          <ul className={`flex text-2xl`}>
            <li>
              <Link to="/" className="text-white px-3 py-2">Home</Link>
            </li>
            <li>
              <Link to="/products" className="text-white px-3 py-2">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white px-3 py-2">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav;
