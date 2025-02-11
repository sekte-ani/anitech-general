import Card from '@/components/micro/Card';
import SectionTitle from '@/components/micro/SectionTitle';
import { MissionData } from '@/store/statis/about/About';

const MissionContent = () => {
  return (
    <div className='grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 justify-self-center gap-5 lg:gap-20 mt-7'>
      {MissionData.map((item, idx) => (
        <Card
          key={idx}
          title={item.title}
          description={item.desc}
          className='group text-title bg-white hover:bg-card-hover hover:text-white'
        />
      ))}
    </div>
  );
};
function Mission() {
  return (
    <section className='relative mt-20 px-10 lg:px-20 xl:px-40 2xl:px-96'>
      <div className='absolute right-0 -top-10 -z-10 bg-[#EDF1F8] h-72 w-2/5 lg:w-1/4'></div>
      <SectionTitle
        className='text-center'
        title='Misi'
      />
      <MissionContent />
    </section>
  );
}

export default Mission;
