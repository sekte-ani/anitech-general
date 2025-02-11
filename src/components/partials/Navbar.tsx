'use client';
import Link from 'next/link';
import ImageComponent from '../micro/ImageComponent';
import PrimaryButton from '../micro/PrimaryButton';
import { useRouter } from 'next/navigation';

function Navbar() {
  const router = useRouter();
  const navigation = [
    {
      title: 'Beranda',
      link: '/',
    },
    {
      title: 'Tentang',
      link: '/about',
    },
    {
      title: 'Produk',
      link: '/product',
    },
  ];

  const handleClick = () => {
    router.push('/contact');
  };
  return (
    <nav className='flex justify-around items-center py-5 bg-white'>
      <Link href='/'>
        <ImageComponent
          src='/img/logo.png'
          alt='Ini Sebuah Logo'
          className='w-10'
        />
      </Link>
      <div className='flex gap-10 text-base items-center'>
        {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className='text-secondary'
          >
            {item.title}
          </Link>
        ))}
        <PrimaryButton
          title='Contact Us'
          onClick={handleClick}
        />
      </div>
    </nav>
  );
}

export default Navbar;
