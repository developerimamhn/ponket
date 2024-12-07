import React from 'react';
import Image from 'next/image'; 
import image5 from '../image/image5.png'; 

const AutoSlider = () => {
  const images = Array(12).fill(image5);

  return (
    <div className="relative overflow-hidden w-full bg-[#E0A604]"> 
      <div className="flex animate-slide whitespace-nowrap gap-8  py-[40px]">
        {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-[134px] h-full">
            <Image className="object-cover w-full h-full" src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {images.map((img, index) => (
          <div key={index + images.length} className="flex-shrink-0 w-[134px] h-full">
            <Image className="object-cover w-full h-full" src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
