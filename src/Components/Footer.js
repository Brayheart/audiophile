const Footer = () => {
  return (
    <div>
      <div className="p-4 my-20 lg:px-36 lg:flex lg:flex-row-reverse lg:w-full">
        <picture className="lg:w-full">
          <source
            media="(min-width: 1024px)"
            srcSet={"/assets/shared/desktop/image-best-gear.jpg"}
          />
          <source
            media="(min-width: 768px)"
            srcSet={"/assets/shared/tablet/image-best-gear.jpg"}
          />
          <img
            src={"/assets/shared/mobile/image-best-gear.jpg"}
            className="w-full h-auto rounded-lg mb-10 "
          />
        </picture>
        <div className="space-y-6 p-5 text-center lg:text-left lg:w-full lg:flex lg:flex-col lg:justify-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold md:text-5xl md:px-10 lg:text-2xl lg:pl-0 lg:items-start lg:w-8/12 lg:text-3xl">
            BRINGING YOU THE <span className="text-orange-400">BEST</span> AUDIO
            GEAR
          </h2>

          {/* Description */}
          <p className="text-gray-400 lg:text-sm lg:w-8/12">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>

      <footer className="bg-white text-black text-center">
        {/* Logo and Links */}
        <div className="bg-black text-white">
          <div className="py-6 border-t border-gray-600 border-opacity-50">
            {/* Logo */}
            <h3 className="text-xl font-bold mb-4">audiophile</h3>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-4">
              <a href="/" className="hover:text-gray-300 transition-colors">
                Home
              </a>
              <a
                href="/headphones"
                className="hover:text-gray-300 transition-colors"
              >
                Headphones
              </a>
              <a
                href="/speakers"
                className="hover:text-gray-300 transition-colors"
              >
                Speakers
              </a>
              <a
                href="/earphones"
                className="hover:text-gray-300 transition-colors"
              >
                Earphones
              </a>
            </nav>
          </div>

          {/* Lower Description */}
          <p className="text-gray-400 mt-6">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
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
      </footer>
    </div>
  );
};

export default Footer;
