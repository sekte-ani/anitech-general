import Card from '@/components/micro/Card';
import SectionTitle from '@/components/micro/SectionTitle';
import { MissionData } from '@/store/statis/about/About';

const MissionContent = () => {
  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 max-w-5xl mx-auto"
    >
      {MissionData.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          description={item.desc}
          className="group text-title bg-white hover:bg-card-hover hover:shadow-top hover:text-white"
        />
      ))}
    </div>
  );
};
function Mission() {
  return (
    <section
      data-aos="fade-up"
      className="relative mt-24 lg:mt-32 px-6 lg:px-20"
    >
      <div className="absolute right-0 top-0 -z-10 bg-[#EDF1F8] h-96 w-full max-w-md rounded-l-3xl"></div>
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-12 bg-primary"></div>
        <span className="text-primary font-medium uppercase tracking-widest text-sm">Misi Kami</span>
        <div className="h-px w-12 bg-primary"></div>
      </div>
      <SectionTitle className="text-center" title="Misi" />
      <MissionContent />
    </section>
  );
}

export default Mission;
