import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image1 from '../../../assets/ladakh.webp';
import Image2 from '../../../assets/cochin.jpg';
import Image3 from '../../../assets/coorg.jpg';
import Image4 from '../../../assets/darjeeling.avif';
import Image5 from '../../../assets/himachal.jpg';
import Image6 from '../../../assets/jaipur.jpg';
import Image7 from '../../../assets/shillong.jpg';
import Image8 from '../../../assets/tamil nadu.jpg';
import Image9 from '../../../assets/ahmedabad.jpg';
import Image10 from '../../../assets/lonavala.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const HomeTourPackages = () => {
  const tourData = [
    {
      image: Image1,
      title: 'Magnificent Ladakh',
      locations: 'Leh, Nubra Valley, Pangong Lake',
    },
    {
      image: Image2,
      title: 'Beautiful Cochin',
      locations: 'Kochi, Munnar, Alleppey',
    },
    {
      image: Image3,
      title: 'Serene Coorg',
      locations: 'Madikeri, Kushalnagar, Talacauvery',
    },
    {
      image: Image4,
      title: 'Charming Darjeeling',
      locations: 'Darjeeling, Kalimpong, Mirik',
    },
    {
      image: Image5,
      title: 'Splendid Himachal',
      locations: 'Delhi, Shimla, Manali',
    },
    {
      image: Image6,
      title: 'Majestic Rajasthan',
      locations: 'Jaipur, Udaipur, Jaisalmer',
    },
    {
      image: Image7,
      title: 'Enchanting Shillong',
      locations: 'Shillong, Cherrapunjee, Mawlynnong',
    },
    {
      image: Image8,
      title: 'Tantalizing Tamil Nadu',
      locations: 'Chennai, Madurai, Kanyakumari',
    },
    {
      image: Image9,
      title: 'Amazing Ahmedabad',
      locations: 'Ahmedabad, Gandhinagar, Kutch',
    },
    {
      image: Image10,
      title: 'Lovely Lonavala',
      locations: 'Lonavala, Khandala, Karla Caves',
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto my-12 " data-aos="fade-up">
    <div className='flex items-center mb-4 px-4 md:px-2'>
    <div className="w-1 h-10 bg-amber-400 mr-4"></div>
    <h1 className='text-3xl text-zinc-600 text-left font-medium'>
    Some of our <span className='text-amber-500'>Tour Packages</span></h1>
    </div>
      <Carousel responsive={responsive} infinite={true}>
        {tourData.map((tour, index) => (
          <div key={index} className="p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative p-4">
                <img src={tour.image} alt={tour.title} className="w-[300px] h-36 object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-left text-gray-600 mx-5 font-semibold">{tour.title}</h3>
                <div className="flex items-center text-left mt-2 py-4 h-12 ">
                  <FaMapMarkerAlt className="mr-2 text-orange-500" />
                  <span className='text-sm'>{tour.locations}</span>
                </div>
                <div className="mt-2 text-left">
                  <button className="bg-amber-500 mx-7 text-white py-2 px-4  hover:bg-zinc-950 transition ease-in-out duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeTourPackages;
