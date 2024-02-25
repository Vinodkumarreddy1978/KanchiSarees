import React from 'react'
import Logo from './images/logo.jpg'
import logo1 from './images/saree1.jpg';
import logo2 from './images/saree2.jpg';
import logo3 from './images/saree3.jpg';
import logo4 from './images/saree4.jpg';

function GalleryItem({src}){
    return(
        // <div className='text-center m-10 rounded-md z-0 lg:basis-1/4 md:basis-1/2'>
        //     <div className='rounded-lg overflow-hidden block GalleryItem'>
        //     <img src={src} alt={src}  className='border border-0 rounded-lg hover:scale-125 ease-in duration-500 cursor-pointer'/>

        //     </div>

        <div className='overflow-hidden border border-0 rounded-lg p-10'>
            <div className='overflow-hidden rounded-lg'>
            <img src={src} alt={src} width='250rem' height='500px' className='border border-0  transition-transform duration-300 hover:scale-125 '/>
        </div>
        </div>
    )
}

function Main() {
    const  images = [logo1, logo2, logo3, logo4]
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div className='w-full Main'>
            <div className='h-screen flex flex-col justify-center items-center mainbg text-white '>
                <div className='mt-10'>
                    <h1 className='text-center font-bold text-4xl lg:text-6xl'>SHRI VAIBHAVI SILKS</h1>
                    <h1 className='text-center text-xl italic p-6 lg:text-2xl'><span className='font-bold'>Sarees</span> truly are dresses with a soul</h1>
                </div>
                <div className='flex justify-center w-full'>
                    <img src={Logo}  className='MainLogo rounded-3xl' alt='logo' /> 
                </div>
            </div>
            <div className='p-6'>
                <h2 className='font-bold text-3xl mt-10'>About Us</h2>
                <p>{text}</p>
            </div>
            <div className='w-full p-6 '>
                <h2 className='font-bold text-3xl'>Our Top  Sarees</h2>
                <div className='gallery w-full flex flex-wrap lg:flex-nowrap md:flex-nowrap justify-center items-center'>
                    {images.map((image) => <GalleryItem key={image} src={image}/>)}
                </div>

            </div>  
            <div className='h-4/5 w-full bg-zinc-900 text-white p-10'>
                {text}
            </div>
        </div>
    )
}

export default Main
