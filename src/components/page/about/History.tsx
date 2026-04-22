import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';

function History() {
  return (
    <section
      data-aos="fade-up"
      className="text-center flex flex-col items-center px-6 lg:px-20 mt-20 lg:mt-28"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-12 bg-primary"></div>
        <span className="text-primary font-medium uppercase tracking-widest text-sm">Perjalanan Kami</span>
        <div className="h-px w-12 bg-primary"></div>
      </div>
      <SectionTitle title="Sejarah" />
      <div className="inline-flex items-center gap-2 mt-5 mb-3 bg-[#4C9DAE]/10 border border-[#4C9DAE]/30 rounded-full px-4 py-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#4C9DAE]"></span>
        <span className="text-[#4C9DAE] text-sm font-medium">Didirikan April 2024</span>
      </div>
      <Description
        className="mt-3 max-w-2xl lg:max-w-xl"
        text="<span style='font-weight: 500;'>A.N.I Tech</span> lahir pada bulan April 2024 sebagai sebuah perusahaan yang berkomitmen menghadirkan inovasi teknologi di era digital."
      />
    </section>
  );
}

export default History;
