'use client';
import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';

function Hero() {
  return (
    <section
      className={`h-[40vh] lg:h-[70vh] flex flex-col justify-center px-10 lg:px-40 bg-right bg-[url('/img/about/about_hero.png')] bg-cover`}
    >
      <SectionTitle title='Tentang Kami' />
      <Description
        className='mt-5 w-full md:text-96 lg:w-[500px]'
        text='<b>A.N.I Technology</b> berdiri sebagai simbol inovasi yang lahir dari komunitas pembelajar yang penuh semangat.'
      />
    </section>
  );
}

export default Hero;
