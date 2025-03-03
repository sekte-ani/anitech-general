import React from 'react';
import { FaTiktok } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import Link from 'next/link';

const ContactInfo = () => {
  return (
    <div className='max-w-xl mx-auto p-6 bg-white text-gray-800'>
      <h2 className='text-3xl md:text-5xl font-semibold text-title text-center md:text-left'>
        Kontak Kami
      </h2>
      <p className='font-medium text-base md:text-lg text-justify mt-3 text-gray-700'>
        A.N.I Tech hadir untuk mendukung transformasi digital bisnis Anda dengan
        teknologi terintegrasi dan inovatif. Hubungi kami sekarang untuk
        konsultasi, penawaran, atau pertanyaan lebih lanjut.
      </p>

      <div className='flex flex-wrap md:grid md:grid-cols-2 mt-5 text-title'>
        <div className='flex flex-col gap-5 w-full'>
          <Link
            href='https://mail.google.com/mail/?view=cm&fs=1&to=aniteknologi@gmail.com'
            className='font-medium text-base md:text-lg flex items-center gap-3 underline'
            target='__blank'
            prefetch={false}
          >
            <MdEmail className='w-5 h-5' />
            <span>aniteknologi@gmail.com</span>
          </Link>
          <Link
            href='https://wa.me/6285117202154'
            className='font-medium text-base md:text-lg flex items-center gap-3 underline'
            target='__blank'
            prefetch={false}
          >
            <MdCall className='w-5 h-5' />
            <span>085117202154</span>
          </Link>
          <Link
            href='https://www.linkedin.com/company/a-n-i-tech'
            className='font-medium text-base md:text-lg flex items-center gap-3 underline'
            target='__blank'
            prefetch={false}
          >
            <FaLinkedin className='w-5 h-5' />
            <span>A.N.I TECH</span>
          </Link>
        </div>
        <div className='flex flex-col gap-5 w-full ml-0 mt-5 md:mt-0 md:ml-10 '>
          <Link
            href='https://www.tiktok.com/@a.n.i.tech'
            className='font-medium text-base md:text-lg flex items-center gap-3 underline'
            target='__blank'
            prefetch={false}
          >
            <FaTiktok className='w-5 h-5' />
            <span>a.n.i.tech</span>
          </Link>
          <Link
            href='https://www.instagram.com/anitech_id'
            className='font-medium text-base md:text-lg flex items-center gap-3 underline'
            target='__blank'
            prefetch={false}
          >
            <BiLogoInstagramAlt className='w-5 h-5' />
            <span>anitech_id</span>
          </Link>
        </div>
      </div>

      <p className='font-medium text-justify text-base md:text-lg mt-5 text-title'>
        Atau isi formulir di samping dan tim kami akan segera menghubungi Anda.
      </p>
    </div>
  );
};

export default ContactInfo;
