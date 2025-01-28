import React from 'react';
import GalleryBg from "../../assets/GalleryBg.webp"
import image1 from "../../assets/aboutBg.jpg";
import image2 from "../../assets/ahmedabad.jpg";
import image3 from "../../assets/cochin.jpg";
import image4 from "../../assets/coorg.jpg";
import image5 from "../../assets/darjeeling.avif";
import image6 from "../../assets/hero1.jpg";
import image7 from "../../assets/hero2.jpg";
import image8 from "../../assets/hero3.jpg";
import image9 from "../../assets/hero4.jpg";
import image10 from "../../assets/hero5.jpg";
import image11 from "../../assets/hero6.jpg";
import image12 from "../../assets/visMis.jpg";
import image13 from "../../assets/transport.webp";
import image14 from "../../assets/jaipur.jpg";
import image15 from "../../assets/himachal.jpg";
import image16 from "../../assets/homeMid.png";
import image17 from "../../assets/ladakh.webp";
import image18 from "../../assets/jaipur.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18
];

const Gallery = () => {
  return (
    <>
    
    <img src={GalleryBg} className='h-[50vh] object-cover object-center w-full'/>
    <div className="container mx-auto py-8 px-4 my-12">
      <h2 className="text-3xl font-semibold text-center mb-8">A Sneak Peak to the captured moments at Enjoy Holidays</h2>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div key={index} className="break-inside">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Gallery;
