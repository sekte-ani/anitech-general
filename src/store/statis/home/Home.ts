import { FaNoteSticky, FaUser } from 'react-icons/fa6';
import { BsFillLaptopFill } from 'react-icons/bs';
import { ImPriceTag } from 'react-icons/im';
import { IconType } from 'react-icons';

interface SoulutionInterface {
  icon: IconType;
  title: string;
  description: string;
  iconStyle: string;
}

interface InovationInterface {
  number: string;
  title: string;
  description: string;
}

interface FaqInterface {
  question: string;
  answer: string;
}

export const SolutionData: SoulutionInterface[] = [
  {
    icon: FaNoteSticky,
    title: 'Konsultasi <br/> Awal',
    description:
      'Mengadakan sesi diskusi dengan klien untuk memahami kebutuhan, tantangan, dan tujuan secara lebih mendalam',
    iconStyle: 'text-konsultasi_awal group-hover:text-putih',
  },
  {
    icon: BsFillLaptopFill,
    title: 'Pengembangan <br/> & Implementasi',
    description:
      'Melakukan pengembangan solusi atau layanan digital yang disepakati, dengan pengujian dan feedback berkelanjutan.',
    iconStyle: 'text-implementasi group-hover:text-putih',
  },
  {
    icon: FaUser,
    title: 'Pendekatan <br/> Personalisasi',
    description:
      'Memastikan setiap solusi dibuat khusus, tidak menggunakan pendekatan yang sama untuk semua.',
    iconStyle: 'text-personalisasi group-hover:text-putih',
  },
  {
    icon: ImPriceTag,
    title: 'Fleksibilitas <br/> Harga',
    description:
      'Menawarkan harga fleksibel sesuai anggaran klien dengan pilihan paket yang memberikan nilai terbaik.',
    iconStyle: 'text-harga group-hover:text-putih',
  },
];

export const InovationData: InovationInterface[] = [
  {
    number: '01',
    title: 'Desain Digital',
    description:
      'Desain yang menarik, fungsional, dan user-friendly untuk memenuhi berbagai kebutuhan digital dan tujuan bisnis Anda.',
  },
  {
    number: '02',
    title: 'Pengembangan Responsif',
    description:
      'Kami membangun situs yang otomatis menyesuaikan tampilan dan fungsionalitas di berbagai perangkat dan ukuran layar.',
  },
  {
    number: '03',
    title: 'Optimasi Situs Web',
    description:
      'Kami meningkatkan kecepatan, kinerja, dan aksesibilitas untuk pengalaman pengguna yang optimal, membuatnya lebih efisien.',
  },
  {
    number: '04',
    title: 'Pengalaman Intuitif Untuk Pengguna',
    description:
      'Dengan produk user-friendly yang menawarkan pengalaman intuitif, meningkatkan kenyamanan pengguna dalam setiap interaksi.',
  },
];

export const FaqData: FaqInterface[] = [
  {
    question: 'Apa itu A.N.I Tech?',
    answer:
      'Ani adalah perusahaan yang bergerak dibidang teknologi Dibangun dengan semangat kolaborasi, A.N.I Tech berfokus pada peningkatan kompetensi di bidang teknologi informasi.',
  },
  {
    question: 'Apakah Ani hanya melayani klien di Indonesia?',
    answer:
      'Tidak, kami melayani klien baik di dalam maupun luar negeri dan dapat bekerja secara remote atau on-site sesuai kebutuhan.',
  },
  {
    question: 'Bagaimana cara saya memulai kerja sama dengan Ani?',
    answer:
      'Anda bisa menghubungi kami melalui formulir konsultasi di website, dan tim kami akan segera mengatur pertemuan awal untuk membahas kebutuhan Anda.',
  },
];
