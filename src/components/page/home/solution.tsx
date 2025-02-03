import SectionTitle from '@/components/micro/SectionTitle';
import { FaNoteSticky, FaUser } from 'react-icons/fa6';
import { BsFillLaptopFill } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';
import Card from '@/components/micro/Card';
import Description from '@/components/micro/Description';
function Solution() {
  const cardContent = [
    {
      icon: FaNoteSticky,
      title: 'Konsultasi <br/> Awal',
      description:
        'Mengadakan sesi diskusi dengan klien untuk memahami kebutuhan, tantangan, dan tujuan secara lebih mendalam',
    },
    {
      icon: BsFillLaptopFill,
      title: 'Pengembangan <br/> & Implementasi',
      description:
        'Melakukan pengembangan solusi atau layanan digital yang disepakati, dengan pengujian dan feedback berkelanjutan.',
    },
    {
      icon: FaUser,
      title: 'Pendekatan <br/> Personalisasi',
      description:
        'Memastikan setiap solusi dibuat khusus, tidak menggunakan pendekatan yang sama untuk semua.',
    },
    {
      icon: ImPriceTag,
      title: 'Fleksibilitas <br/> Harga',
      description:
        'Menawarkan harga fleksibel sesuai anggaran klien dengan pilihan paket yang memberikan nilai terbaik.',
    },
  ];

  return (
    <div className='flex justify-between mt-44'>
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
      <div className='grid grid-rows-2 gap-5 w-1/2'>
        <div className='grid grid-cols-2 gap-5'>
          {cardContent.map((item, index) =>
            index < 2 ? (
              <Card
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ) : (
              ''
            ),
          )}
        </div>
        <div className='grid grid-cols-2 gap-5'>
          {cardContent.map((item, index) =>
            index >= 2 ? (
              <Card
                key={index}
                Icon={item.icon}
                title={item.title}
                description={item.description}
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
