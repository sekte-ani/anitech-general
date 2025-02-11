'use client';
import SectionTitle from '@/components/micro/SectionTitle';
import EmployeeList from './micro/EmployeeList';
import PrimaryButton from '@/components/micro/PrimaryButton';

function Employee() {
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
        onClick={() => {}}
        title='Selengkapnya'
        className='mt-32'
      />
    </div>
  );
}

export default Employee;
