'use client';
import { FaqData } from '@/store/statis/home/Home';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

interface FaqCardProps {
  question?: string;
  answer?: string;
}

const FaqCard: React.FC<FaqCardProps> = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='space-y-4'>
      {FaqData.map((item, index) => (
        <div
          key={index}
          className='bg-white shadow-sm border border-gray-100 rounded-lg overflow-hidden'
        >
          <button
            className='w-full text-left text-base lg:text-xl px-8 py-6 text-title font-semibold flex justify-between items-center transition-all duration-300 ease-in-out'
            onClick={() => toggleFAQ(index)}
          >
            {item.question}
            <span
              className={`transition-transform duration-300 ${
                openIndex === index ? 'rotate-45' : ''
              }`}
            >
              <FaPlus className='text-title' />
            </span>
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openIndex === index
                ? 'max-h-[300px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className='px-8 py-6 text-desc text-sm lg:text-base border-t font-medium'>
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqCard;
