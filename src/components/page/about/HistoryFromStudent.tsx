import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';

const Content = () => {
  return (
    <div className='w-full lg:w-1/2 lg:mr-32 xl:mr-40 mt-7 lg:mt-0'>
      <SectionTitle title='Dari mahasiswa, untuk nusantara ' />
      <Description
        className='mt-7 text-justify'
        text='Dibangun dengan semangat kolaborasi, <span style="font-weight: 600;">A.N.I Tech</span> berfokus pada peningkatan kompetensi di bidang teknologi informasi. Anggota tim aktif berbagi pengetahuan, memecahkan masalah, dan mengembangkan proyek teknologi bersama. Seiring waktu, dedikasi mereka membuahkan hasil, menjadikan tim kecil ini dikenal berkat kualitas kerja dan kontribusinya, hingga akhirnya berkembang menjadi perusahaan bernama <span style="font-weight: 600;">A.N.I Tech</span>.'
      />
    </div>
  );
};

function HistoryFromStudent() {
  return (
    <section className='flex flex-col lg:flex-row justify-between gap-0 lg:gap-10 xl:gap-0 px-10 lg:px-0 mt-20'>
      <ImageComponent
        src='/img/about/mhs.png'
        alt='mhs'
      />
      <Content />
    </section>
  );
}

export default HistoryFromStudent;
