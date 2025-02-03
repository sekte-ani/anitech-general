import React from 'react';
import ImageComponent from './ImageComponent';

interface CardProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ Icon, title, description }) => {
  return (
    <section className='border-2 border-gray-200 shadow-md shadow-gray-100 rounded-md p-5'>
      {Icon && <Icon className='text-4xl text-primary' />}
      <h1
        className='text-2xl mt-3 font-semibold'
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p
        className='text-sm mt-3'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
};

export default Card;
