import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';

export const metadata = {
  title: 'A.N.I Tech - Beranda',
  description:
    'ANI Technology adalah startup teknologi yang berkomitmen menghadirkan inovasi melalui pengembangan produk digital unggulan. Kami menggabungkan keahlian teknis dengan pemahaman mendalam terhadap kebutuhan klien untuk memberikan solusi yang relevan, efisien, dan berdampak positif.',
  keywords: 'tentang, ani, A.N.I, about',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function Product() {
  return (
    <div>
      <SectionTitle
        title='Ini Halaman Product A.N.I'
        className='text-center'
      />
      <Description
        className='text-center'
        text='ANI Tech lahir pada bulan April 2024 sebagai sebuah perusahaan yang berkomitmen menghadirkan inovasi teknologi di era digital.'
      />
    </div>
  );
}
