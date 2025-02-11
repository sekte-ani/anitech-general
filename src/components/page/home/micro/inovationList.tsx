import React from 'react';

interface InovationListProps {
  ListNumber: string;
  title: string;
  description: string;
  className?: string;
}

const InovationList: React.FC<InovationListProps> = ({
  ListNumber,
  title,
  description,
  className,
}) => {
  return (
    <section className={`mt-10 cursor-default text-desc ${className}`}>
      <h1 className='font-semibold text-3xl'>
        {ListNumber} &nbsp;&nbsp;&nbsp; {title}
      </h1>
      <p className='text-sm mt-3'>{description}</p>
    </section>
  );
};

export default InovationList;
