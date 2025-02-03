import Image from 'next/image';
import React from 'react';

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
  imageStyle?: string;
  layout?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  className,
  alt,
  imageStyle,
  layout = 'responsive',
}) => {
  return (
    <div className={`${className}`}>
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        layout={layout}
        className={`object-cover ${imageStyle}`}
      />
    </div>
  );
};

export default ImageComponent;
