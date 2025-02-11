import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { AiFillInstagram } from 'react-icons/ai';
import { IconType } from 'react-icons';

interface MediaInterface {
  icon: IconType;
  link: string;
}

interface NavInterface {
  title: string;
  link: string;
}

export const navigation: NavInterface[] = [
  { title: 'Beranda', link: '/' },
  { title: 'Tentang', link: '/about' },
  { title: 'Product', link: '/product' },
  { title: 'Hubungi Kami', link: '/contact' },
];

export const media: MediaInterface[] = [
  { icon: MdEmail, link: '/' },
  { icon: BsFillTelephoneFill, link: '/' },
  { icon: TbBrandLinkedinFilled, link: '/' },
  { icon: AiFillInstagram, link: '/' },
];
