import React from 'react'
import Logo from './images/Screenshot 2024-02-23 185651.svg'
import saree1 from './images/IMG-20240222-WA0002.jpg'
import saree2 from './images/IMG-20240222-WA0003.jpg'
import saree3 from './images/IMG-20240222-WA0004.jpg'
import saree4 from './images/IMG-20240222-WA0005.jpg'

function GalleryItem({src}){
    return(
        <div className='overflow-hidden lg:overflow-hidden border border-0 rounded-lg'>
            <img src={src} alt={src} width='250rem' height='500px' className='border border-0 rounded-lg transition-transform duration-300 hover:scale-125 '/>
        </div>
    )
}

function Main() {
    const  images = [saree1, saree2, saree3, saree4]
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div className='w-full Main mt-24'>
            <div>
                <h3 className='text-center font-bold text-4xl'>Welcome To</h3>
            </div>
            <div className='flex justify-center flex-col w-full p-6'>
                <img src={Logo}  className='MainLogo w-full border border-0 rounded-xl' alt='logo' />
            </div>
            <div className='p-6'>
                <h2 className='font-bold text-3xl'>About Us</h2>
                <p>{text}</p>
            </div>
            <div className='w-full p-6'>
                <h2 className='font-bold text-3xl'>Our Top  Sarees</h2>
                <div className='gallery w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6 p-10'>
                    {images.map((image) => <GalleryItem key={image} src={image}/>)}
                </div>

            </div>  
            <div className='h-50 w-full bg-zinc-900'>
                
            </div>
        </div>
    )
}

export default Main
