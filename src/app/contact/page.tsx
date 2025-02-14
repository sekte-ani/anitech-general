import ContactForms from '@/components/page/contact/ContactForms';
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
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center pt-12">
        <ContactInfo />
        <ContactForms />
      </div>
    </div>
  );
}
