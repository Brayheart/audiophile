import React from "react";
// import headphones from '/assets/home/mobile/mk1headphone.png';
import ProductCards from "./ProductCards";

const Earphones = () => {
  return (
    <div>
      <div className="bg-black h-100px flex items-center justify-center">
        <div className="text-white text-center text-[28px]">EARPHONES</div>
      </div>

      <div className="relative h-352px bg-custom-lightgray rounded-lg m-5 flex flex-col justify-center items-center">
        <img
          src={"/assets/home/mobile/mk1headphone.png"}
          className="w-6/12 absolute top-7"
          alt=""
        />
        <svg
          className="absolute bottom-2"
          xmlns="http://www.w3.org/2000/svg"
          width="253"
          height="123"
          viewBox="0 0 253 123"
          fill="none"
        >
          <g opacity="0.152113" filter="url(#filter0_f_0_2116)">
            <ellipse cx="126.5" cy="61.5" rx="82.5" ry="17.5" fill="black" />
          </g>
          <defs>
            <filter
              id="filter0_f_0_2116"
              x="0.507492"
              y="0.507492"
              width="251.985"
              height="121.985"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="21.7463"
                result="effect1_foregroundBlur_0_2116"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="flex justify-center mt-10 mb-20">
        <div className="flex flex-col gap-[24px] text-center w-[327px] items-center">
          <div className="text-custom-orange text-[14px] tracking-[10px]">
            NEW PRODUCT
          </div>
          <div className="text-black text-[28px] font-bold">
            XX99 Mark II Headphones
          </div>
          <div className="font-[15px] leading-[25px] opacity-[0.5]">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </div>
          <button className="bg-custom-orange text-white w-[160px] h-[48px]">
            SEE PRODUCT
          </button>
        </div>
      </div>

      <ProductCards />
    </div>
  );
};

export default Earphones;
