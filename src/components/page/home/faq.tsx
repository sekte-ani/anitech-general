import SectionTitle from '@/components/micro/SectionTitle';
import FaqCard from './micro/faqCard';
import Description from '@/components/micro/Description';

function Faq() {
  return (
    <section className='mt-20 text-center'>
      <SectionTitle title='Frequently Asked Question' />
      <Description
        className='my-5'
        text='Punya pertanyaan? Mungkin Anda akan menemukan jawabannya di sini'
      />
      <FaqCard />
    </section>
  );
}

export default Faq;
