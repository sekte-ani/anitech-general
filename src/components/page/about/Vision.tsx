import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';

function Vision() {
  return (
    <section className='text-center flex flex-col items-center px-10 mt-20'>
      <SectionTitle title='Visi' />
      <Description
        className='mt-7 w-full md:text-96 lg:w-[500px] xl:w-[800px]'
        text='Menjadi pemimpin dan pionir dalam inovasi teknologi global, dalam menghadirkan solusi digital yang mendorong perubahan dunia serta memberdayakan masyarakat untuk masa depan teknologi yang lebih baik.'
      />
    </section>
  );
}

export default Vision;
