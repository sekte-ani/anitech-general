import React from 'react';

interface DescriptionProps {
  text: string;
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({ text, className }) => {
  return (
    <p
      className={`text-sm md:text-lg text-desc ${className}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default Description;
