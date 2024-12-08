//src/components/Navbar.js

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-900 text-black fixed w-full top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <span>
                <Image className="h-20 w-auto" width={500} height={500} src="/logo.png" alt="Healthcare Community" />
              </span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <span className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#19B78D]">
                    Home
                  </span>
                </Link>
                <Link href="/#about">
                  <span className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#19B78D]">
                    About us
                  </span>
                </Link>
                <Link href="/#services">
                  <span className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#19B78D]">
                    Services
                  </span>
                </Link>
                <Link href="/#contact">
                  <span className="px-5 py-3 rounded-md text-sm font-medium bg-[#19B78D] hover:bg-[#217e65] text-white">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
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
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1  sm:px-3 ">
            <Link href="/">
              <span className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#19B78D]">
                Home
              </span>
            </Link>
            <Link href="/#about">
              <span className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#19B78D]">
                About us
              </span>
            </Link>
            <Link href="/#services">
              <span className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#19B78D]">
                Services
              </span>
            </Link>
            <Link href="/#contact">
              <span className="block px-3 py-2 rounded-md text-base font-medium bg-[#19B78D] hover:bg-[#217e65] text-white">
                Contact Us
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;