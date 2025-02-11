import SectionTitle from '@/components/micro/SectionTitle';
import { FaNoteSticky, FaUser } from 'react-icons/fa6';
import { BsFillLaptopFill } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';
import Card from '@/components/micro/Card';
import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';
function Solution() {
  const cardContent = [
    {
      icon: FaNoteSticky,
      title: 'Konsultasi <br/> Awal',
      description:
        'Mengadakan sesi diskusi dengan klien untuk memahami kebutuhan, tantangan, dan tujuan secara lebih mendalam',
      iconStyle: 'text-[#BDDBFF] group-hover:text-white',
    },
    {
      icon: BsFillLaptopFill,
      title: 'Pengembangan <br/> & Implementasi',
      description:
        'Melakukan pengembangan solusi atau layanan digital yang disepakati, dengan pengujian dan feedback berkelanjutan.',
      iconStyle: 'text-[#D2BFF7] group-hover:text-white',
    },
    {
      icon: FaUser,
      title: 'Pendekatan <br/> Personalisasi',
      description:
        'Memastikan setiap solusi dibuat khusus, tidak menggunakan pendekatan yang sama untuk semua.',
      iconStyle: 'text-[#A7DCEB] group-hover:text-white',
    },
    {
      icon: ImPriceTag,
      title: 'Fleksibilitas <br/> Harga',
      description:
        'Menawarkan harga fleksibel sesuai anggaran klien dengan pilihan paket yang memberikan nilai terbaik.',
      iconStyle: 'text-[#FDBFC1] group-hover:text-white',
    },
  ];

  return (
    <div className='flex flex-col xl:flex-row justify-between mt-20 xl:mt-44'>
      <div>
        <SectionTitle
          className=''
          title='Solusi Digital <br/> untuk kemajuan <br/> bisnis anda.'
        />
        <Description
          className='mt-5'
          text='Kami mengembangkan produk digital untuk <br/> mengatasi tantangan teknologi, mempercepat <br/> transformasi, dan mendukung kemajuan bisnis.'
        />
      </div>
      {/* Card */}
      <div className='relative grid gap-5 w-full mt-10 xl:mt-0 xl:w-1/2'>
        {/* <div
          className={`absolute -bottom-20 -right-96 bg-[url('/img/bg_solution2.png')] bg-contain -z-10 w-full h-full`}
        ></div> */}
        <ImageComponent
          src='/img/bg_solution.png'
          alt='bg solution'
          className='absolute -z-10 -bottom-32 -right-44'
        />
        <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5'>
          {cardContent.map((item, index) =>
            index < 2 ? (
              <Card
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
                className='group bg-white hover:bg-card-hover hover:text-white'
                iconStyle={item.iconStyle}
              />
            ) : (
              ''
            ),
          )}
        </div>
        <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5'>
          {cardContent.map((item, index) =>
            index >= 2 ? (
              <Card
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
                className='group bg-white hover:bg-card-hover hover:text-white'
                iconStyle={item.iconStyle}
              />
            ) : (
              ''
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default Solution;
