import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <h1
      className={`text-3xl xl:text-4xl 2xl:text-6xl font-semibold ${className}`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};

export default SectionTitle;
