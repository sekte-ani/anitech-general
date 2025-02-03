import React from 'react';

type PrimaryButtonProps = {
  title: string;
  onClick: () => void;
  className?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onClick,
  className,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`bg-primary text-white px-5 py-3 rounded-lg ${className}`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
