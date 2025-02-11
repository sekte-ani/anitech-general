import SectionTitle from '@/components/micro/SectionTitle';

import Card from '@/components/micro/Card';
import Description from '@/components/micro/Description';
import ImageComponent from '@/components/micro/ImageComponent';
import { SolutionData } from '@/store/statis/home/Home';

const CardSolution = () => {
  return (
    <div className='relative grid gap-5 w-full mt-10 xl:mt-0 xl:w-1/2'>
      <ImageComponent
        src='/img/bg_solution.png'
        alt='bg solution'
        className='absolute -z-10 -bottom-32 -right-44'
      />
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5'>
        {SolutionData.map((item, index) =>
          index < 2 ? (
            <Card
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
              className='group text-title bg-white hover:bg-card-hover hover:text-white'
              iconStyle={item.iconStyle}
            />
          ) : (
            ''
          ),
        )}
      </div>
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5'>
        {SolutionData.map((item, index) =>
          index >= 2 ? (
            <Card
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
              className='group text-title bg-white hover:bg-card-hover hover:text-white'
              iconStyle={item.iconStyle}
            />
          ) : (
            ''
          ),
        )}
      </div>
    </div>
  );
};

function Solution() {
  return (
    <div className='flex flex-col xl:flex-row justify-between mt-20 xl:mt-44'>
      <div>
        <SectionTitle
          className=''
          title='Solusi Digital <br/> untuk kemajuan <br/> bisnis anda.'
        />
        <Description
          className='mt-5'
          text='Kami mengembangkan produk digital untuk <br/> mengatasi tantangan teknologi, mempercepat <br/> transformasi, dan mendukung kemajuan bisnis.'
        />
      </div>
      <CardSolution />
    </div>
  );
}

export default Solution;
