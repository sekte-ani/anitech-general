import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';

function Quotes() {
  return (
    <section className="relative mt-24 lg:mt-32">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent"></div>
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 py-20 px-6 lg:px-20 xl:px-40">
        <div data-aos="fade-up" className="lg:w-1/2 border-l-4 border-[#4C9DAE] pl-8">
          <div className="text-6xl text-primary/30 font-serif mb-4 leading-none">
            &ldquo;
          </div>
          <Description
            className="italic text-xl lg:text-2xl leading-relaxed text-title"
            text="&ldquo;Transformasi dari sebuah tim belajar menjadi perusahaan adalah bukti nyata bahwa semangat belajar, kerja keras, dan kolaborasi dapat menghasilkan sesuatu yang luar biasa.&rdquo;"
          />
          <div className="flex items-center gap-4 mt-8">
            <ImageComponent
              className="w-14 h-14 rounded-full object-cover ring-2 ring-[#4C9DAE]/30"
              imageStyle="rounded-full"
              src="/img/about/ferdi_round.jpeg"
              alt="ferdi"
            />
            <div>
              <p className="font-semibold text-title text-base">Ferdiyansah</p>
              <p className="text-title/70 text-sm">Founder & CEO</p>
            </div>
          </div>
        </div>
        <ImageComponent
          aos="fade-left"
          className="hidden lg:block w-full max-w-md"
          src="/img/about/quotes.png"
          alt="quotes"
        />
      </div>
    </section>
  );
}

export default Quotes;
