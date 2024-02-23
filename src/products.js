import React from 'react';
import logo1 from './images/saree1.jpg';
import logo2 from './images/saree2.jpg';
import logo3 from './images/saree3.jpg';
import logo4 from './images/saree4.jpg';
import logo5 from './images/saree5.jpg';
import logo6 from './images/saree6.jpg';
import logo7 from './images/saree7.jpg';
import logo8 from './images/saree8.jpg';
import logo9 from './images/saree9.jpg';
import logo10 from './images/saree10.jpg';
import logo11 from './images/saree11.jpg';
import Contact from './contact';

const ProductCard = ({ name, rating, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer ">
        <div className='overflow-hidden flex'>
      <img src={imageUrl} alt={name} className="w-full h-80 object-cover transition-transform transform hover:scale-110" />
      </div>
      <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>

        <div className="mb-2">
          <span className="font-bold text-gray-600">Rating:</span> {rating}/5
        </div>
        <div>
        <button className="bg-violet-500 w-20 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-lg text-white float-right">
            Cart
          </button>
        </div>
        <div className="text-gray-700"> 
        <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
        focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-xl text-white'>${price}</button></div>
      </div>
        </div>
  );
};
function Product()
{
    return(
        <div className="flex justify-center items-center min-h-screen grid grid-cols-1 ml-2 gap-10 lg:grid-cols-3 lg:ml-20 mt-10">
    <div >
    <ProductCard
      name="Saree1"
      rating={4.5}
      price={29.99}
      imageUrl={logo1}
    />
    </div>
    <div>
    <ProductCard
      name="Saree2"
      rating={4.5}
      price={29.99}
      imageUrl={logo2}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo3}
    /></div>
    <div>
    <ProductCard
      name="Saree4"
      rating={4.5}
      price={29.99}
      imageUrl={logo4}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo5}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo6}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo7}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo8}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo9}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo10}
    /></div>
    <div>
    <ProductCard
      name="Saree3"
      rating={4.5}
      price={29.99}
      imageUrl={logo11}
    /></div>
    <Contact/>
  </div>
    )
}

export default Product;
