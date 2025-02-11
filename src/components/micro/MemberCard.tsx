'use client';
import React, { useEffect, useState } from 'react';
import ImageComponent from './ImageComponent';
import { IMAGE_URL } from '@/config/endpoint';

interface Member {
  id: number;
  name: string;
  role_name: string[];
  images: string;
}

interface MemberCardProps {
  data: Member;
  alt: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ data, alt }) => {
  return (
    <div className='w-fit relative flex justify-center'>
      <ImageComponent
        src={data.images ? `${IMAGE_URL}/${data.images}` : '/img/bahlil.png'}
        alt={alt}
        className={`w-60 md:w-48 lg:w-60 2xl:w-72 rounded-tr-md rounded-bl-xl`}
        imageStyle='rounded-tr-[7rem] rounded-bl-[7rem]'
      />
      <div className='bg-white absolute -bottom-10 w-4/5 h-36 text-center flex flex-col justify-center px-5 rounded-tr-[4rem] rounded-bl-[4rem] shadow-md shadow-gray-300'>
        <h1 className='text-sm 2xl:text-base text-title font-semibold'>
          {data.name}
        </h1>
        <p className='text-xs 2xl:text-sm text-desc mt-3'>
          {data.role_name.join('& ')}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
