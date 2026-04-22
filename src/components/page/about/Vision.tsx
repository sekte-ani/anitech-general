import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';

function Vision() {
  return (
    <section
      data-aos="fade-up"
      className="text-center flex flex-col items-center px-6 lg:px-20 mt-24 lg:mt-32"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-12 bg-primary"></div>
        <span className="text-primary font-medium uppercase tracking-widest text-sm">Visi Kami</span>
        <div className="h-px w-12 bg-primary"></div>
      </div>
      <SectionTitle title="Visi" />
      <div className="mt-6 max-w-3xl border border-[#4C9DAE]/20 rounded-2xl bg-[#4C9DAE]/5 px-8 py-6">
        <Description
          className="leading-relaxed"
          text="Menjadi pemimpin dan pionir dalam inovasi teknologi global, dalam menghadirkan solusi digital yang mendorong perubahan dunia serta memberdayakan masyarakat untuk masa depan teknologi yang lebih baik."
        />
      </div>
    </section>
  );
}

export default Vision;
