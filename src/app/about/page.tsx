import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';
import Hero from '../../components/page/about/Hero';
import History from '../../components/page/about/History';
import HistoryFromStudent from '@/components/page/about/HistoryFromStudent';
import Vision from '@/components/page/about/Vision';
import Mission from '@/components/page/about/Mission';
import Quotes from '@/components/page/about/Quotes';
import Contact from '@/components/page/about/Contact';

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
    <div className='overflow-hidden'>
      <Hero />
      <History />
      <HistoryFromStudent />
      <Vision />
      <Mission />
      <Quotes />
      <Contact />
    </div>
  );
}
