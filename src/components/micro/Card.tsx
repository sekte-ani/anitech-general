import React from 'react';
import ImageComponent from './ImageComponent';
import { BsFillLaptopFill } from 'react-icons/bs';
interface CardProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  className?: string;
  iconStyle?: string;
}

const Card: React.FC<CardProps> = ({
  Icon,
  title,
  description,
  className,
  iconStyle,
}) => {
  return (
    <section
      className={`border-2 border-gray-200 shadow-md shadow-gray-100 rounded-md p-5 ${className}`}
    >
      {Icon && (
        <Icon
          className={`text-4xl ${iconStyle}`}
          style={{ backgroundColor: iconStyle }}
        />
      )}
      <h1
        className='text-xl 2xl:text-2xl mt-3 font-semibold'
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
