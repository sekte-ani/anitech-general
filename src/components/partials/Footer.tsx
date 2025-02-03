'use client';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { AiFillInstagram } from 'react-icons/ai';
import ImageComponent from '../micro/ImageComponent';
function Footer() {
  const navigation = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'About Us',
      link: '/about',
    },
    {
      title: 'Services',
      link: '/product',
    },
    {
      title: 'FAQ',
      link: '/product',
    },
    {
      title: 'Testimonials',
      link: '/product',
    },
  ];

  const media = [
    {
      icon: <MdEmail className='text-2xl' />,
      link: '/',
    },
    {
      icon: <BsFillTelephoneFill className='text-2xl' />,
      link: '/',
    },
    {
      icon: <TbBrandLinkedinFilled className='text-2xl' />,
      link: '/',
    },
    {
      icon: <AiFillInstagram className='text-2xl' />,
      link: '/',
    },
  ];
  return (
    <footer className='flex flex-col items-center gap-10 mx-40 border-t-2 border-gray-200 py-20 mt-20'>
      {/* Logo Image */}
      <Link href='/'>
        <ImageComponent
          src='/img/logo.png'
          alt='A.N.I Tech'
          className='w-10'
        />
      </Link>
      {/* Navigation */}
      <div className='flex justify-center gap-10'>
        {navigation.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
      {/* Social Media */}
      <div className='flex justify-center gap-10'>
        {media.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
          >
            {item.icon}
          </Link>
        ))}
      </div>
      <p className='text-sm'>&copy;Copyright 2025 - All right reserved</p>
    </footer>
  );
}

export default Footer;
