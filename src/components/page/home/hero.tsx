'use client';

import Description from '@/components/micro/Description';
import PrimaryButton from '@/components/micro/PrimaryButton';
import SectionTitle from '@/components/micro/SectionTitle';

function Hero() {
  return (
    <div className='flex flex-col items-center gap-10 py-20'>
      <SectionTitle
        title='Transformasi digital <br> dimulai dari sini'
        className='text-center'
      />
      <Description
        className='text-center w-4/6'
        text='<b>ANI Technology</b> adalah startup teknologi yang berkomitmen menghadirkan inovasi melalui pengembangan produk digital unggulan. Kami menggabungkan keahlian teknis dengan pemahaman mendalam terhadap kebutuhan klien untuk memberikan solusi yang relevan, efisien, dan berdampak positif.'
      />
      <PrimaryButton
        title='Mulai Sekarang'
        onClick={() => {}}
      />
    </div>
  );
}

export default Hero;
