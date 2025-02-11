import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';
import InovationList from './micro/inovationList';
import { InovationData } from '@/store/statis/home/Home';

const InovationContent = () => {
  return (
    <div className='w-full xl:w-1/2'>
      <SectionTitle title='Menghadirkan solusi nyata dengan produk inovatif' />
      {InovationData.map((item, idx) => (
        <InovationList
          key={idx}
          ListNumber={item.number}
          title={item.title}
          description={item.description}
          className='hover:text-[#4C9DAE]'
        />
      ))}
    </div>
  );
};

function Inovation() {
  return (
    <div className='relative bg-contain mt-48 lg:mt-48 2xlmt-72 flex flex-col-reverse xl:flex-row-reverse justify-between'>
      <InovationContent />
      <ImageComponent
        src='/img/inovation.png'
        alt='logo'
        className='xl:absolute w-[27rem] lg:w-[800px] xl:w-[800px] -ml-32 lg:-ml-60 xl:-ml-0 mb-10 xl:mb-0 bottom-0 xl:-left-96 2xl:-left-44'
      />
    </div>
  );
}

export default Inovation;
