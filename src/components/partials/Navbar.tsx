'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ImageComponent from '../micro/ImageComponent';
import PrimaryButton from '../micro/PrimaryButton';
import { useRouter } from 'next/navigation';
import { navigation } from '@/store/statis/partials/Nav';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    router.push('/contact');
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className='flex justify-between md:justify-around items-center py-5 px-6 md:px-16 bg-white shadow-md sticky top-0 z-50'>
      {/* Logo */}
      <Link href='/'>
        <ImageComponent
          src='/img/logo.png'
          alt='Ini Sebuah Logo'
          className='w-10'
        />
      </Link>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-10 text-base items-center'>
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`font-semibold transition-colors duration-300 
              ${
                pathname === item.link
                  ? 'text-primary_ani'
                  : 'text-title hover:text-primary_ani'
              }`}
          >
            {item.title}
          </Link>
        ))}
        <PrimaryButton
          title='Hubungi Kami'
          onClick={handleClick}
        />
      </div>

      {/* Hamburger */}
      <button
        className='md:hidden text-2xl transition-transform duration-300'
        onClick={handleNav}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-20 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center gap-6 py-6 z-30 
          transition-all duration-300 ease-in-out transform ${
            isOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-5 opacity-0 pointer-events-none'
          }`}
      >
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={handleNav}
            className={`font-semibold transition-colors duration-300 
              ${
                pathname === item.link
                  ? 'text-primary_ani'
                  : 'text-title hover:text-primary_ani'
              }`}
          >
            {item.title}
          </Link>
        ))}
        <PrimaryButton
          title='Hubungi Kami'
          onClick={handleClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;
