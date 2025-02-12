import Description from '@/components/micro/Description';
import SectionTitle from '@/components/micro/SectionTitle';
import ProductCardSlider from '@/components/page/product/ProductCardSlider';


export const metadata = {
  title: 'A.N.I Tech - Beranda',
  description:
    'ANI Technology adalah startup teknologi yang berkomitmen menghadirkan inovasi melalui pengembangan produk digital unggulan. Kami menggabungkan keahlian teknis dengan pemahaman mendalam terhadap kebutuhan klien untuk memberikan solusi yang relevan, efisien, dan berdampak positif.',
  keywords: 'tentang, ani, A.N.I, about',
  icons: {
    icon: '/img/logo.png',
  },
};

export default function Product() {
  return (
    <div className='px-10 lg:px-20 xl:px-40'>
      <SectionTitle
        title='Produk Kami'
        className='!text-[50px] pt-10 text-center'
      />
      <Description
        className='text-center pt-4 font-medium max-w-prose mx-auto'
        text='Kami menghadirkan solusi digital inovatif yang dirancang untuk meningkatkan efisiensi dan produktivitas. Dengan teknologi canggih dan pendekatan berbasis kebutuhan pengguna, produk kami memberikan pengalaman yang optimal dan hasil yang berdampak nyata.'
      />
      <ProductCardSlider/>
    </div>
  );
}
