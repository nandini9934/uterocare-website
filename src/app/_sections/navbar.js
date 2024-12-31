"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='lg:bg-pink-400'>
      <section className="container mx-auto">
        <nav className="bg-peach relative py-4 px-5">
          <div className="flex items-center text-xl justify-between lg:grid lg:grid-cols-9 ">
            {/* Logo */}
            <div className='col-span-1'>
              <img src="/logo.png" height={100} width={100} alt="Logo" />

            </div>
            <div className="hidden lg:col-start-4 lg:col-end-11 lg:flex lg:gap-[50px]">
              <Link
                href="/"
                className={`block text-white font-bold mb-2 ${pathname === '/'
                    ? 'active'
                    : 'hover:text-pink-700 hover:underline'
                  }`}
              >
                Home
              </Link>

              <Link
                href="/#pricing"
                className={`block text-white font-bold mb-2 ${pathname === '/#pricing'
                    ? 'active'
                    : 'hover:text-pink-700 hover:underline'
                  }`}
              >
                Why Choose Us
              </Link>

              <Link
                href="/#team"
                className={`block text-white font-bold mb-2 ${pathname === '/#team'
                    ? 'active'
                    : 'hover:text-pink-700 hover:underline'
                  }`}
              >
                Team
              </Link>

              {/* <Link
                href="/contact"
                className={`block text-white font-bold mb-2 ${pathname === '/contact'
                    ? 'active'
                    : 'hover:text-pink-700 hover:underline'
                  }`}
              >
                Contact
              </Link> */}
              <Link
                href="/privacy-policy"
                className={`block text-white font-bold mb-2 ${pathname === '/privacy-policy'
                    ? 'active'
                    : 'hover:text-pink-700 hover:underline'
                  }`}
              >
                Privacy policy
              </Link>
              {/* Hamburger Menu for Mobile */}

            </div>
            <div className="block lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-pink-500 hover:text-pink-500 focus:outline-none"
              >
                {/* Hamburger icon */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>



          <div
            className={`${isOpen ? 'w-full bg-uteropink text-base ml-2' : 'hidden'
              }`}
          >
            <Link
              href="/"
              className={`block text-pink-500 font-bold mb-2 ${pathname === '/'
                  ? 'active'
                  : 'hover:text-pink-700 hover:underline'
                }`}
            >
              Home
            </Link>

            <Link
              href="/#pricing"
              className={`block text-pink-500 font-bold mb-2 ${pathname === '/#pricing'
                  ? 'active'
                  : 'hover:text-pink-700 hover:underline'
                }`}
            >
              Why Choose Us
            </Link>

            <Link
              href="/#team"
              className={`block text-pink-500 font-bold mb-2 ${pathname === '/#team'
                  ? 'active'
                  : 'hover:text-pink-700 hover:underline'
                }`}
            >
              Team
            </Link>

            {/* <Link
              href="/contact"
              className={`block text-pink-500 font-bold mb-2 ${pathname === '/contact'
                  ? 'active'
                  : 'hover:text-pink-700 hover:underline'
                }`}
            >
              Contact
            </Link> */}
            <Link
              href="/privacy-policy"
              className={`block text-pink-500 font-bold mb-2 ${pathname === '/privacy-policy'
                  ? 'active'
                  : 'hover:text-pink-700 hover:underline'
                }`}
            >
              Privacy policy
            </Link>
          </div>

        </nav>
      </section>
      </div>
      );


}