
import React from "react";

const Images = () => {
  const ads = [
    "Simplifying AYUSH Licensing,Empowering Wellness",
    "Authencity Starts here, AYUSH Licensing Made Easy",
    "Connecting You to AYUSH  Excellence Seamlessly",
  ];

  return (
    <div className="w-100% h-[50px] bg-white text-black py-[8px] overflow-hidden lg:mt-32 md:mt-32 mt-[722px]">
      <div className="flex animate-scroll w-full">
        {/* Duplicate the ads to create a seamless loop */}
        {[...ads, ...ads].map((ad, index) => (
          <span
            key={index}
            className="text-sm font-semibold whitespace-nowrap mx-4"
          >
            {ad}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Images;
