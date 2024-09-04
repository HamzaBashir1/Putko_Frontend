'use client'

import React from 'react';
import { BiSearch } from "react-icons/bi";
import { FaHeart } from 'react-icons/fa';

const Search = () => {
  // Define the actual searchModal or mock implementation
  const searchModal = { onOpen: () => console.log('Search Modal Opened') };

  const locationLabel = "Destination";
  const checkInLabel = "Check-in";
  const checkOutLabel = "Check-out";
  const guestLabel = "Who";

  return (
    <Hero
      locationLabel={locationLabel}
      checkInLabel={checkInLabel}
      checkOutLabel={checkOutLabel}
      guestLabel={guestLabel}
      searchModal={searchModal}
    />
  );
};

const Hero = ({ locationLabel, checkInLabel, checkOutLabel, guestLabel, searchModal }) => {
  const handleSearchClick = () => {
    if (searchModal && typeof searchModal.onOpen === 'function') {
      searchModal.onOpen();
    } else {
      console.log('searchModal.onOpen is not defined');
    }
  };

  return (
    <div className="relative">
      <nav className="border-gray-200 bg-transparent dark:bg-transparent dark:border-gray-700 absolute top-0 left-0 w-full z-50">
        <div className="flex flex-wrap items-center justify-between mx-4 md:mx-20 p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/putko.png" className="h-8" alt="Logo" />
           
          </a>
          <div className="flex items-center space-x-4">
            <button className="bg-[#58CAAA] text-white px-6 py-2 rounded-lg hover:bg-[#3abd98] transition">
              Log in
            </button>
            <FaHeart className="text-white text-xl hover:text-gray-300 cursor-pointer" />
            <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="hidden w-full" id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="
          pt-[230px]
          bg-cover
          bg-center
          bg-[url('https://s3-alpha-sig.figma.com/img/bb47/c92b/c5bf527b8df6eb4e119ac00e8d535333?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ALEXUeZPfeLyTULExIMJn6tmS2jwXJVE4hUeR16yTGIgQyg2hPSEsCHakcJnOaFukasSskvxGH-E0J-rC~3k5WbUWyGzbutcY5JQ0jqkmc7PvcYHbatT0AJjJQf4LDSeWYkpt5hitOR8xFFiE9TWPxanA0Y8YI3SgbKXyDUdFVf9MuUE6s2HPqfog4Vd0OLhPaJxHFC~ap0g0F58JlCg83MVgjZ28EfG3wK2uHmK0urt~7~Wr68ilMrFeMkUIeenuwTddpSBusdaUlUr1QXuJBoC-dvmvXoyVI0CpWKf1fUvV8DVTEm1Yphw0wRim-QjdwExDAvUsFiXHDeWEkILHg__')]
          h-[600px]
          sm:h-[500px]
          md:h-[600px]
          lg:h-[720px]
          xl:h-[720px]
          relative
          overflow-hidden
          bg-blend-darken
        "
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 "></div> {/* Dark overlay for better text visibility */}

        <div className="relative z-10 flex flex-col items-start ml-6 sm:ml-10 md:ml-24">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            No matter where <br /> you're going to, we'll <br /> take you there
          </h1>

          <div
            onClick={handleSearchClick}
            className="
              mt-6
              border
              w-full
              sm:w-[350px]
              py-2
              rounded-full
              shadow-sm
              hover:shadow-md
              transition
              cursor-pointer
              bg-transparent
              border-gray-300
            "
          >
            <div className="flex flex-row items-center justify-between px-4">
              <div className="text-xs font-semibold text-white">{locationLabel}</div>
              <div
                className="
                  hidden
                  sm:block
                  text-xs
                  font-semibold
                  border-x
                  px-4
                  text-center
                  text-white
                "
              >
                {checkInLabel} - {checkOutLabel}
              </div>
              <div
                className="

                  text-xs
                  pl-1
                  pr-2
                  text-gray-600
                  flex
                  flex-row
                  items-center
                  gap-3
                "
              >
                <div className=" text-white ">{guestLabel}</div>
                <div
                  className="
          
                    p-1
                    bg-[#4FBE9F]
                    rounded-full
                    text-white
                  "
                >
                  <BiSearch size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:pl-24 pl-5 pt-4'>
          <div className='flex flex-row items-center'>
            <img src='/people.png' alt='People' width={320} />
            <p className='text-white -ml-[180px] text-xs'>2,500 People Used Putko 24 Hours</p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Search;
