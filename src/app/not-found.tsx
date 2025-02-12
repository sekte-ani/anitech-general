'use client';

import PrimaryButton from '@/components/micro/PrimaryButton';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6'>
      <h1 className='text-6xl font-bold text-gray-800'>404</h1>
      <p className='text-xl text-gray-600 mt-4'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <PrimaryButton
        title='Kembali ke Halaman Utama'
        onClick={() => router.push('/')}
        className='mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700'
      />
    </div>
  );
}
