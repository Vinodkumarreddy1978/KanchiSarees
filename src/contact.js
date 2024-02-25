import React from 'react';
import Nav from './Nav';
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <div className="w-full overflow-auto touch-auto Contact">
      <Nav />
      <div className=' w-full overflow-auto p-6'>
        <h1 className='mt-20 text-3xl'>Contact us</h1>
        <div class="lg:w-3/5 w-4/5 mx-auto mt-8 p-6 rounded-md shadow-md bg-amber-300">
          <h2 class="text-lg font-semibold mb-4">Customer Information</h2>
          <form>
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-amber-200 border border-gray-300 h-10 rounded-md" />
            </div>
            <div class="mb-4">
              <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" id="phone" name="phone" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-amber-200 border border-gray-300 h-10 rounded-md" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm bg-amber-200 border border-gray-300 h-10 rounded-md" />
            </div>
            <div>
              <Link to="/KanchiSarees">
                <button type='submit' className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className='ConatctFooter w-full bg-zinc-900 flex flex-col h-4/5 justify-center items-center p-10 '>
        <div className='flex flex-row lg:gap-24 md:gap-14 gap-6'>
          <SocialIcon url='https://twitter.com' className=' hover:animate-pulse' />
          <SocialIcon url='https://instagram.com' className=' hover:animate-pulse' />
          <SocialIcon url='https://whatsapp.com' className=' hover:animate-pulse' />
          <SocialIcon url='https://facebook.com' className=' hover:animate-pulse' />
          <SocialIcon url='https://threads.com' className=' hover:animate-pulse' />
        </div>
        <div className='w-full bg-zinc-900 text-white p-10 mb-24'>
            {text}<br />
            <br />
            {text}
        </div>
      </div>
    </div>
  );
};

export default Contact;
