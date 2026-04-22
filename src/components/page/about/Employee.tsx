'use client';

import Link from 'next/link';
import SectionTitle from '@/components/micro/SectionTitle';
import EmployeeList from './micro/EmployeeList';
import PrimaryButton from '@/components/micro/PrimaryButton';

function Employee() {
  return (
    <div data-aos="fade-up" className="mt-24 lg:mt-32 px-6 lg:px-20">
      <div className="inline-flex items-center gap-2 mb-4">
        <div className="h-px w-12 bg-primary"></div>
        <span className="text-primary font-medium uppercase tracking-widest text-sm">Tim Kami</span>
        <div className="h-px w-12 bg-primary"></div>
      </div>
      <SectionTitle className="text-center mb-12" title="Manajemen Eksekutif" />
      <EmployeeList />
      <div className="text-center mt-12">
        <Link href="/about/employee">
          <PrimaryButton onClick={() => {}} title="Selengkapnya" />
        </Link>
      </div>
    </div>
  );
}

export default Employee;
