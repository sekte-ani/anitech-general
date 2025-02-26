import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';

function Quotes() {
  return (
    <section className='bg-quotes flex items-center justify-between gap-10 xl:gap-32  mt-20'>
      <div
        data-aos='fade-up'
        className='py-20 px-10 md:px-20 lg:px-40 xl:px-52 md:w-4/5 lg:w-1/2'
      >
        <Description
          className='italic text-title'
          text='“Transformasi dari sebuah tim belajar menjadi perusahaan adalah bukti nyata bahwa semangat belajar, kerja keras, dan kolaborasi dapat menghasilkan sesuatu yang luar biasa.”'
        />
        <div className='flex gap-3 items-center mt-7'>
          <ImageComponent
            className='w-14 rounded-full'
            imageStyle='rounded-full'
            src='/img/about/ferdi_round.jpeg'
            alt='perdi'
          />
          <div>
            <p className='font-semibold text-title text-sm'>Ferdiyansyah</p>
            <p className='text-title text-xs'>Founder & CEO</p>
          </div>
        </div>
      </div>
      <ImageComponent
        aos='fade-left'
        className='hidden md:block'
        src='/img/about/quotes.png'
        alt='quotes'
      />
    </section>
  );
}

export default Quotes;
