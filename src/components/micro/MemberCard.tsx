'use client';
import React, { useEffect, useState } from 'react';
import ImageComponent from './ImageComponent';

interface MemberCardProps {
  img: string;
  name: string;
  division: string;
  alt: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  img,
  name,
  division,
  alt,
}) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Fungsi untuk update ukuran layar
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Panggil saat komponen dimount
    handleResize();

    // Tambahkan event listener
    window.addEventListener('resize', handleResize);

    // Cleanup saat komponen di-unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='w-fit relative flex justify-center'>
      <ImageComponent
        src={img}
        alt={alt}
        className={`w-60 md:w-48 lg:w-60 2xl:w-80 rounded-tr-md rounded-bl-xl`}
        imageStyle='rounded-tr-[7rem] rounded-bl-[7rem]'
      />
      <div className='bg-white absolute -bottom-10 w-4/5 h-36 text-center flex flex-col justify-center px-5 rounded-tr-[4rem] rounded-bl-[4rem] shadow-md shadow-gray-300'>
        <h1 className='text-sm 2xl:text-base text-title font-semibold'>
          {name}
        </h1>
        <p className='text-xs 2xl:text-sm text-desc mt-3'>{division}</p>
      </div>
    </div>
  );
};

export default MemberCard;
