'use client';
import Link from 'next/link';

import ImageComponent from '../micro/ImageComponent';
import { useState, useEffect } from 'react';
import { media, navigation } from '@/store/statis/partials/Footer';

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative flex flex-col items-center gap-10 px-4 py-24 h-auto mt-20 bg-cover bg-center bg-no-repeat bg-[url('/img/footer_grid.png')] overflow-hidden">
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#FCFEFF]/20 to-[#2E9CA7]/20 -z-10 pointer-events-none'></div>

      {/* Logo Image */}
      <div className='relative z-20'>
        <Link href='/'>
          <ImageComponent
            src='/img/logo.png'
            alt='A.N.I Tech'
            className='w-10'
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className='relative z-20 grid gap-4 sm:flex sm:gap-8'>
        {navigation.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className='px-5 pt-5 text-sm md:text-base text-center text-[#223650] hover:text-gray-500 font-semibold'
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Social Media */}
      <div className='relative z-20 flex gap-6'>
        {media.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            target='__blank'
            prefetch={false}
            className='text-[#223650] hover:text-gray-900'
          >
            <item.icon className='text-2xl' />
          </Link>
        ))}
      </div>

      <p className='relative z-20 text-xs md:text-sm text-center'>
        &copy;{`Copyright ${year} - All right reserved`}
      </p>
    </footer>
  );
}

export default Footer;
