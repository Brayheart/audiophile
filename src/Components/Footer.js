import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="p-4 my-20 lg:px-36 lg:flex lg:flex-row-reverse lg:w-full">
        <picture className="lg:w-full">
          <source
            media="(min-width: 1024px)"
            srcSet={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-best-gear.jpg`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${process.env.PUBLIC_URL}/assets/shared/tablet/image-best-gear.jpg`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/shared/mobile/image-best-gear.jpg`}
            className="w-full h-auto rounded-lg mb-10 "
          />
        </picture>
        <div className="space-y-6 p-5 text-center lg:text-left lg:w-full lg:flex lg:flex-col lg:justify-center">
          <h2 className="text-3xl font-bold md:text-5xl md:px-10 lg:text-4xl lg:p-0 lg:items-start lg:w-8/12 lg:text-3xl">
            BRINGING YOU THE <span className="text-orange-400">BEST</span> AUDIO
            GEAR
          </h2>

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

      <footer className="bg-black text-white text-center">
        <div className="py-6 border-t border-gray-600 border-opacity-50 lg:flex lg:flex-row lg:justify-between">
          <h3 className="text-xl font-bold mb-4 md:text-left md:px-10 lg:mb-0">
            audiophile
          </h3>

          <nav className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:px-10 md:gap-[20px] md:mt-6 lg:mt-0">
            <Link to="/" className="hover:text-orange-400 transition-colors">
              HOME
            </Link>
            <Link
              to="/headphones"
              className="hover:text-orange-400 transition-colors"
            >
              HEADPHONES
            </Link>
            <Link
              to="/speakers"
              className="hover:text-orange-400 transition-colors"
            >
              SPEAKERS
            </Link>
            <Link
              to="/earphones"
              className="hover:text-orange-400 transition-colors"
            >
              EARPHONES
            </Link>
          </nav>
        </div>

        <p className="text-gray-400 mt-6 px-10 md:text-left md:mt-0">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.
        </p>

        <p className="text-gray-400 py-6 px-10 md:text-left">
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
