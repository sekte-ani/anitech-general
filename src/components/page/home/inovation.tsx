import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';

function Inovation() {
  return (
    <div className='mt-44 flex flex-row-reverse justify-between'>
      <SectionTitle title='Menghadirkan <br/> solusi nyata dengan <br/> produk inovatif' />
      <ImageComponent
        src='/img/logo.png'
        alt='logo'
        className='w-20'
      />
    </div>
  );
}

export default Inovation;
