'use client';
import Description from '@/components/micro/Description';
import PrimaryButton from '@/components/micro/PrimaryButton';
import SectionTitle from '@/components/micro/SectionTitle';

function Contact() {
  return (
    <section
      data-aos='fade-up'
      className='text-center flex flex-col items-center px-10 mt-40'
    >
      <SectionTitle title='Membangun atau <br/> meningkatkan? Kami bantu!' />
      <Description
        className='my-7 w-full md:text-96 lg:w-[500px] xl:w-[800px]'
        text='Kami bersemangat untuk memahami bisnis Anda lebih dalam dan mendukung pencapaian tujuan digital Anda.'
      />
      <PrimaryButton
        onClick={() => {}}
        title='Hubungai Kami'
      />
    </section>
  );
}

export default Contact;
