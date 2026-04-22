import SectionTitle from '@/components/micro/SectionTitle';

import Card from '@/components/micro/Card';
import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';
import { SolutionData } from '@/store/statis/home/Home';

const CardSolution = () => {
  return (
    <div className="relative grid gap-5 w-full mt-10 xl:mt-0 xl:w-5/12">
      <ImageComponent
        aos="fade-left"
        src="/img/bg_solution.png"
        alt="bg solution"
        className="absolute -z-10 -bottom-32 -right-44"
      />
      <div
        data-aos="fade-up"
        className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5"
      >
        {SolutionData.map((item, index) =>
          index < 2 ? (
            <Card
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
              className="group text-title bg-white hover:bg-card-hover hover:shadow-top hover:text-white"
              iconStyle={item.iconStyle}
            />
          ) : (
            ""
          ),
        )}
      </div>
      <div
        data-aos="fade-up"
        className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5"
      >
        {SolutionData.map((item, index) =>
          index >= 2 ? (
            <Card
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
              className="group text-title bg-white hover:bg-card-hover hover:shadow-top hover:text-white"
              iconStyle={item.iconStyle}
            />
          ) : (
            ""
          ),
        )}
      </div>
    </div>
  );
};

function Solution() {
  return (
    <div className="flex flex-col xl:flex-row justify-between items-center mt-20 xl:mt-44 gap-12 xl:gap-0">
      <div data-aos="fade-right" className="xl:w-5/12">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="h-px w-8 bg-primary"></div>
          <span className="text-primary font-medium uppercase tracking-widest text-sm">Layanan Kami</span>
        </div>
        <SectionTitle
          className=""
          title="Solusi Digital <br/> untuk kemajuan <br/> bisnis anda."
        />
        <Description
          className="mt-5"
          text="Kami mengembangkan produk digital untuk <br/> mengatasi tantangan teknologi, mempercepat <br/> transformasi, dan mendukung kemajuan bisnis."
        />
      </div>
      <CardSolution />
    </div>
  );
}

export default Solution;
