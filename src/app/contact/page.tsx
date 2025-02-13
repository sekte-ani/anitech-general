import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';
import ContactInfo from '@/components/page/contact/ContactInfo';

export const metadata = {
  title: 'A.N.I Tech - Beranda',
  description:
    'ANI Technology adalah startup teknologi yang berkomitmen menghadirkan inovasi melalui pengembangan produk digital unggulan. Kami menggabungkan keahlian teknis dengan pemahaman mendalam terhadap kebutuhan klien untuk memberikan solusi yang relevan, efisien, dan berdampak positif.',
  keywords: 'tentang, ani, A.N.I, about',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function Contact() {
  return (
    <div className='px-10 lg:px-20 xl:px-40'>
      <SectionTitle
        title='Ini Halaman Contact A.N.I'
        className='pt-10 text-center'
      />
      <Description
        className='text-center pt-4 font-medium max-w-prose mx-auto'
        text='ANI Tech lahir pada bulan April 2024 sebagai sebuah perusahaan yang berkomitmen menghadirkan inovasi teknologi di era digital.'
      />
      <ContactInfo/>
    </div>
  );
}
