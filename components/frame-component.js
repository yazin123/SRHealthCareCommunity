import React, { useState } from 'react';
import Image from "next/image";
import PropTypes from "prop-types";
import Link from 'next/link';

const FrameComponent = ({ className = "" }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white text-black fixed w-full top-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Image
          className="h-20 w-auto cursor-pointer"
          width={299}
          height={122}
          src="/sr-hc-logo01-1@2x.png"
          alt="Healthcare Community"
        />
        <div className="mq850:hidden items-center space-x-4">
          <a href="/" className="px-3 [text-decoration:none] font-lexend-deca py-2 rounded-md text-sm font-medium hover:text-[#19B78D] text-black cursor-pointer">
            Home
          </a>
          <a href="/#about" className="px-3 py-2 [text-decoration:none] font-lexend-deca rounded-md text-sm font-medium hover:text-[#19B78D] text-black cursor-pointer">
            About us
          </a>
          <a href="/#services" className="px-3 py-2 [text-decoration:none] font-lexend-deca rounded-md text-sm font-medium hover:text-[#19B78D] text-black cursor-pointer">
            Services
          </a>
          <a href="/#contact" className="px-5 py-3 [text-decoration:none] font-lexend-deca rounded-md text-sm font-medium [background:linear-gradient(96.69deg,_#41ebbe,_#19b78d)] hover:[background:linear-gradient(96.69deg,_#41ebbe,_#217e65)]  text-white cursor-pointer">
            Contact Us
          </a>
        </div>
        <div className="-mr-2 mq850:flex hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-[#19B78D]  focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1  sm:px-3 ">
            <Link className='[text-decoration:none]' href="/">
              <span className="block px-3 [text-decoration:none] font-lexend-deca py-2 rounded-md text-sm font-medium hover:text-[#19B78D] text-black cursor-pointer">
                Home
              </span>
            </Link>
            <Link className='[text-decoration:none]' href="/#about">
              <span className="block px-3 [text-decoration:none] font-lexend-deca py-2 rounded-md text-sm font-medium hover:text-[#19B78D] text-black cursor-pointer">
                About us
              </span>
            </Link>
            <Link className='[text-decoration:none]' href="/#services">
              <span className="block px-3 [text-decoration:none] font-lexend-deca py-2 rounded-md text-sm font-medium hover:text-[#19B78D] text-black cursor-pointer">
                Services
              </span>
            </Link>
            <Link className='[text-decoration:none]' href="/#contact">
              <span className="block px-5 py-3 [text-decoration:none] font-lexend-deca rounded-md text-sm font-medium [background:linear-gradient(96.69deg,_#41ebbe,_#19b78d)] hover:[background:linear-gradient(96.69deg,_#41ebbe,_#217e65)]  text-white cursor-pointer">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;