'use client';
import SectionTitle from '@/components/micro/SectionTitle';
import EmployeeList from './micro/EmployeeList';
import PrimaryButton from '@/components/micro/PrimaryButton';
import { useRouter } from 'next/navigation';

function Employee() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about/employee');
  };
  return (
    <div
      data-aos='fade-up'
      className='mt-20 flex flex-col items-center'
    >
      <SectionTitle
        className='text-center mb-10'
        title='Manajemen Eksekutif'
      />
      <EmployeeList />
      <PrimaryButton
        onClick={handleClick}
        title='Selengkapnya'
        className='mt-32'
      />
    </div>
  );
}

export default Employee;
