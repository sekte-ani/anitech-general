'use client';

import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';

export default function BadRequest() {
  return (
    <div className='flex flex-col gap-10 py-40 px-12 text-center justify-center items-center'>
      <ImageComponent
        src='/img/400.png'
        alt='Bad Request'
      />
      <SectionTitle title='Oops, Halaman Bermasalah' />
      <Description text='Permitaan yang dicari tidak tersedia' />
    </div>
  );
}
