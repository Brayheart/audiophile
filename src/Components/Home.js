import React from 'react';
// import header from '../info/assets/home/mobile/image-header.jpg';
// import speakers from '../info/assets/home/mobile/image-speaker-zx9.png';
// import earphone from '../info/assets/home/mobile/earphone.png'
// import mk1headphone from '../info/assets/home/mobile/mk1headphone.png'
// import speakerBackround from '../info/assets/home/mobile/image-speaker-zx7.jpg'
// import earphoneBackground from '../info/assets/home/mobile/image-earphones-yx1.jpg';
import './Home.scss';
import ProductCards from './ProductCards';

const Home = () => {
  return (
    <div>
      {/* header */}
      <div class="relative text-center text-white">
        {/* Product Image */}
        <img src={'/assets/home/mobile/image-header.jpg'} alt="XX99 Mark II Headphones" class="w-full h-auto" />

        {/* Product Info */}
        <div class="product-header absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span class="new-product">New Product</span>
          <h2 class="product-title">XX99 MARK II HEADPHONES</h2>
          <p class="mb-6">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <a href="#" class="see-product-btn">See Product</a>
        </div>
      </div>


      {/* Products */}
      <ProductCards/>

      <div class="max-w-sm mx-auto p-4rounded-lg">
        <div class="orange-speaker-container p-4 rounded-lg">
          <img src={'assets/home/mobile/image-speaker-zx9.png'} alt="ZX9 Speaker" class="w-full h-auto mb-4 orange-speaker" />
          <h2 class="text-2xl font-bold text-white mb-2">ZX9 SPEAKER</h2>
          <p class="text-white text-base mb-4">
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <button class="bg-black text-white font-bold py-2 px-4 rounded hover:bg-opacity-90">
            SEE PRODUCT
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div className="p-4">
          <div className="relative rounded-lg overflow-hidden">
            <div
              className="bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${'/assets/home/mobile/image-speaker-zx7.jpg'})`,
                paddingTop: '75%' // This sets the aspect ratio of the image container
              }}
            >
              {/* The image will cover this div, which has rounded corners at the top */}
            </div>
            <div className="text-center p-6 absolute top-1/4">
              <h2 className="text-2xl font-bold mb-4">ZX7 SPEAKER</h2>
              <a href="#" className="border-2 border-black text-black px-8 py-2 inline-block hover:bg-black hover:text-white transition-colors">
                SEE PRODUCT
              </a>
            </div>
          </div>
        </div>
      </div>

    <div className="p-4">
      <div
        className="bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${'assets/home/mobile/image-earphones-yx1.jpg'})`,
          paddingTop: '75%' // This sets the aspect ratio of the image container
        }}
      ></div>
    </div>

    <div className="flex justify-start items-center bg-gray-100 m-4 rounded p-10 h-72">
      <div className="text-start">
        <h2 className="text-2xl font-bold mb-4">YX1 EARPHONES</h2>
        <button className="border-2 border-black px-8 py-2 inline-block font-bold hover:bg-black hover:text-white transition-colors">
          SEE PRODUCT
        </button>
      </div>
    </div>

    </div>
  );
}

export default Home;
