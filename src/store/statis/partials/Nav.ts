interface NavInterface {
  title: string;
  link: string;
}
export const navigation: NavInterface[] = [
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
