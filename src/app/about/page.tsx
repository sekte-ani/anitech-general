import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';

export const metadata = {
  title: 'A.N.I Tech - About',
  description:
    'Dibangun dengan semangat kolaborasi, ANI Tech berfokus pada peningkatan kompetensi di bidang teknologi informasi.',
  keywords: 'tentang, ani, A.N.I, about',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function About() {
  return (
    <div>
      <SectionTitle
        title='Ini Adalah Halaman About A.N.I'
        className='text-center'
      />
      <Description
        className='text-center'
        text='ANI Tech lahir pada bulan April 2024 sebagai sebuah perusahaan yang berkomitmen menghadirkan inovasi teknologi di era digital.'
      />
    </div>
  );
}
