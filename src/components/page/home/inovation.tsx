import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';
import InovationList from './micro/inovationList';

const InovationContent = () => {
  interface Content {
    number: string;
    title: string;
    description: string;
  }
  const content: Content[] = [
    {
      number: '01',
      title: 'Desain Digital',
      description:
        'Desain yang menarik, fungsional, dan user-friendly untuk memenuhi berbagai kebutuhan digital dan tujuan bisnis Anda.',
    },
    {
      number: '02',
      title: 'Pengembangan Responsif',
      description:
        'Kami membangun situs yang otomatis menyesuaikan tampilan dan fungsionalitas di berbagai perangkat dan ukuran layar.',
    },
    {
      number: '03',
      title: 'Optimasi Situs Web',
      description:
        'Kami meningkatkan kecepatan, kinerja, dan aksesibilitas untuk pengalaman pengguna yang optimal, membuatnya lebih efisien.',
    },
    {
      number: '04',
      title: 'Pengalaman Intuitif Untuk Pengguna',
      description:
        'Dengan produk user-friendly yang menawarkan pengalaman intuitif, meningkatkan kenyamanan pengguna dalam setiap interaksi.',
    },
  ];

  return (
    <div className='w-full xl:w-1/2'>
      <SectionTitle title='Menghadirkan solusi nyata dengan produk inovatif' />
      {content.map((item, idx) => (
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
