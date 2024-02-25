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
import Nav from './Nav';

const ProductCard = ({ name, rating, price, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-2xl border-2 border-amber-950 z-0">
        <div className='overflow-hidden flex'>
      <img src={imageUrl} alt={name} className="w-full h-96 object-cover transition-transform transition-all duration-500 hover:scale-125" />
      </div>
      <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{name}</div>

        <div className="mb-2">
          <span className="font-bold text-gray-600">Rating:</span> {rating}/5
        </div>
        <div className="text-gray-700"> 
        <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
        focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-xl text-white'>${price}</button></div>
      </div>
    </div>
  );
};

function Image(name, rating, price, url){
  this.name = name;
  this.rating = rating;
  this.price = price;
  this.url = url;
}



function Product()
{
  const images = [new Image("Saree1", 4.5, 29.99, logo1),
                  new Image("Saree2", 4.5, 29.99, logo2),
                  new Image("Saree3", 4.5, 29.99, logo3),
                  new Image("Saree4", 4.5, 29.99, logo4),
                  new Image("Saree5", 4.5, 29.99, logo5),
                  new Image("Saree6", 4.5, 29.99, logo6),
                  new Image("Saree7", 4.5, 29.99, logo7),
                  new Image("Saree8", 4.5, 29.99, logo8),
                  new Image("Saree9", 4.5, 29.99, logo9),
                  new Image("Saree10", 4.5, 29.99, logo10),
                  new Image("Saree11", 4.5, 29.99, logo11),
                  new Image("Saree11", 4.5, 29.99, logo11),
                ]
  return(
    <div className="Product overflow-auto touch-auto">
      <Nav />
      <div className=" min-h-screen flex justify-center items-center flex-wrap gap-8 mt-24 mb-10">
          {images.map(image => <div><ProductCard name={image.name} rating={image.rating} price={image.price} imageUrl={image.url}/></div>)}
      </div> 
    </div>
  )
}

export default Product;