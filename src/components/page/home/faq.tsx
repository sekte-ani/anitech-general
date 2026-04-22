import SectionTitle from '@/components/micro/SectionTitle';
import FaqCard from './micro/faqCard';
import Description from '@/components/micro/Description';

function Faq() {
  return (
    <section
      data-aos="fade-up"
      className="mt-24 xl:mt-32 text-center px-4"
    >
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-12 bg-primary"></div>
        <span className="text-primary font-medium uppercase tracking-widest text-sm">FAQ</span>
        <div className="h-px w-12 bg-primary"></div>
      </div>
      <SectionTitle title="Frequently Asked Question" />
      <Description
        className="my-5"
        text="Punya pertanyaan? Mungkin Anda akan menemukan jawabannya di sini"
      />
      <div className="max-w-3xl mx-auto">
        <FaqCard />
      </div>
    </section>
  );
}

export default Faq;
