import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';
import InovationList from './micro/inovationList';
import { InovationData } from '@/store/statis/home/Home';

const InovationContent = () => {
  return (
    <div
      data-aos='fade-up'
      className='w-full xl:w-1/2'
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-8 bg-primary"></div>
        <span className="text-primary font-medium uppercase tracking-widest text-sm">Inovasi</span>
      </div>
      <SectionTitle title='Menghadirkan solusi nyata dengan produk inovatif' />
      {InovationData.map((item, idx) => (
        <InovationList
          aos='fade-left'
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
    <div className="relative bg-contain mt-32 xl:mt-40 flex flex-col-reverse xl:flex-row-reverse justify-between items-center gap-10 xl:gap-0">
      <InovationContent />
      <ImageComponent
        aos="fade-right"
        src="/img/inovation.png"
        alt="inovastion"
        className="xl:absolute w-[27rem] lg:w-[800px] xl:w-[800px] -ml-32 lg:-ml-60 xl:-ml-0 mb-10 xl:mb-0 bottom-0 xl:-left-96 2xl:-left-44"
      />
    </div>
  );
}

export default Inovation;
