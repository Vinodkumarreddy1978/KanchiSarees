/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Logo from './images/Screenshot 2024-02-23 185651.svg'
import { Link } from 'react-router-dom';



function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='fixed left-0 top-0 right-0 w-full z-10'>
      <nav className="Nav p-4 flex justify-center relative items-center">
        <div className='absolute left-5 lg:block md:hidden sm:hidden Logo'>
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-8" />
          </Link>
        </div>
        <h1 className={`lg:text-3xl font-bold uppercase md:text-xl sm:text-sm`}>Shri Vaibhavi Silks</h1>
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
        
        <div className={`absolute right-5 lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <ul className={`flex`}>
            <li>
              <Link to="/" className="text-white hover:text-gray-400 px-3 py-2">Home</Link>
            </li>
            <li>
              <Link to="/products" className="text-white hover:text-gray-400 px-3 py-2">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-400 px-3 py-2">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
// Navbar.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 p-4 flex justify-between items-center">
//       {/* Logo */}
//       <div>
//         <Link to="/">
//           <img src="/logo.png" alt="Logo" className="h-8" />
//         </Link>
//       </div>


//       <div className="block lg:hidden">
//         <button onClick={toggleMenu} className="text-white focus:outline-none">
//           <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             {isOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
//         <ul className="flex">
//           <li>
//             <Link to="/" className="text-white hover:text-gray-400 px-3 py-2 block lg:inline">Home</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="text-white hover:text-gray-400 px-3 py-2 block lg:inline">Contact</Link>
//           </li>
//           <li>
//             <Link to="/products" className="text-white hover:text-gray-400 px-3 py-2 block lg:inline">Products</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
