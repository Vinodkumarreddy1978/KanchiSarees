import React from 'react'
import Logo from './images/logo.jpg'
import logo1 from './images/saree1.jpg';
import logo2 from './images/saree2.jpg';
import logo3 from './images/saree3.jpg';
import logo4 from './images/saree4.jpg';

function GalleryItem({src}){
    return(
        <div className='overflow-hidden border border-0 rounded-lg p-10'>
            <img src={src} alt={src} width='250rem' height='500px' className='border border-0 rounded-lg transition-transform duration-300 hover:scale-125 '/>
        </div>
    )
}

function Main() {
    const  images = [logo1, logo2, logo3, logo4]
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div className='w-full Main mt-24'>
            <div>
                <h3 className='text-center font-bold text-5xl'>Welcome To</h3>
                <h1 className='text-center font-bold text-5xl'>SHRI VAIBHAVI SILKS</h1>
            </div>
            <div className='flex justify-center w-full p-6'>
                <img src={Logo}  className='MainLogo w-60 rounded-3xl' alt='logo' />
                
            </div>
            <div className='p-6'>
                <h2 className='font-bold text-3xl'>About Us</h2>
                <p>{text}</p>
            </div>
            <div className='w-full p-6 '>
                <h2 className='font-bold text-3xl'>Our Top  Sarees</h2>
                <div className='gallery w-full h-auto min-h-screen grid grid-cols-1 ml-2 gap-10 md:grid-cols-2 lg:grid-cols-4 sm:gap-10px '>
                    {images.map((image) => <GalleryItem key={image} src={image}/>)}
                </div>
            </div>
            <div className='h-50 w-full bg-zinc-900'>
                
            </div>
        </div>
    )
}

export default Main
