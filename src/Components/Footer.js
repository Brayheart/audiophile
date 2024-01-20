const Footer = () => {
  return (
    <div>
      
      <div className="p-4">
        <div
          className="bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${'/assets/shared/mobile/image-best-gear.jpg'})`,
            paddingTop: '100%' // This sets the aspect ratio of the image container
          }}
        ></div>
      </div>

      <footer className="bg-black text-white p-10 text-center">
      <div className="space-y-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold">BRINGING YOU THE BEST AUDIO GEAR</h2>

          {/* Description */}
          <p className="text-gray-400">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>

          {/* Logo and Links */}
          <div>
          <div className="py-6 border-t border-gray-600 border-opacity-50">
              {/* Logo */}
              <h3 className="text-xl font-bold mb-4">audiophile</h3>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4">
              <a href="/" className="hover:text-gray-300 transition-colors">Home</a>
              <a href="/headphones" className="hover:text-gray-300 transition-colors">Headphones</a>
              <a href="/speakers" className="hover:text-gray-300 transition-colors">Speakers</a>
              <a href="/earphones" className="hover:text-gray-300 transition-colors">Earphones</a>
              </nav>
          </div>

          {/* Lower Description */}
          <p className="text-gray-400 mt-6">
              Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.
          </p>
          </div>

          {/* Social Links and Copyright */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-600 border-opacity-50">
          <div className="flex space-x-4">
              {/* Social Icons would be here, you can use SVGs or an icon library like @heroicons/react */}
              <a href="#" aria-label="Facebook">
              {/* Facebook icon */}
              </a>
              <a href="#" aria-label="Twitter">
              {/* Twitter icon */}
              </a>
              <a href="#" aria-label="Instagram">
              {/* Instagram icon */}
              </a>
          </div>
          <p className="text-gray-400">Copyright 2021. All Rights Reserved</p>
          </div>
      </div>
      </footer>
    </div>
  );
};

export default Footer;
