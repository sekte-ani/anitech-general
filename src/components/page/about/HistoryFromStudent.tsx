import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';
import SectionTitle from '@/components/micro/SectionTitle';

const Content = () => {
  return (
    <div
      data-aos="fade-left"
      className="w-full lg:w-5/12 mt-8 lg:mt-0 border-l-4 border-[#4C9DAE]/30 pl-6"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-8 bg-primary"></div>
        <span className="text-primary font-medium uppercase tracking-widest text-sm">Awal Mula</span>
      </div>
      <SectionTitle title="Dari mahasiswa, untuk Nusantara" />
      <Description
        className="mt-6 text-lg leading-relaxed"
        text='Dibangun dengan semangat kolaborasi, <span style="font-weight: 600;">A.N.I Tech</span> berfokus pada peningkatan kompetensi di bidang teknologi informasi. Anggota tim aktif berbagi pengetahuan, memecahkan masalah, dan mengembangkan proyek teknologi bersama. Seiring waktu, dedikasi mereka membuahkan hasil, menjadikan tim kecil ini dikenal berkat kualitas kerja dan kontribusinya, hingga akhirnya berkembang menjadi perusahaan bernama <span style="font-weight: 600;">A.N.I Tech</span>.'
      />
    </div>
  );
};

function HistoryFromStudent() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 px-6 lg:px-20 mt-20 lg:mt-28">
      <ImageComponent
        aos="fade-right"
        src="/img/about/mhs.png"
        alt="mhs"
        className="w-full lg:w-5/12 rounded-2xl shadow-xl"
      />
      <Content />
    </section>
  );
}

export default HistoryFromStudent;
