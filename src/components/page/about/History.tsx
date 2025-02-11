import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';

function History() {
  return (
    <section className='text-center flex flex-col items-center px-10 mt-20'>
      <SectionTitle title='Sejarah' />
      <Description
        className='mt-7 w-full md:text-96 lg:w-[500px]'
        text="<span style='font-weight: 500;'>A.N.I Tech</span> lahir pada bulan April 2024 sebagai sebuah perusahaan yang berkomitmen menghadirkan inovasi teknologi di era digital."
      />
    </section>
  );
}

export default History;
