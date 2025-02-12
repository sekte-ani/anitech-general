'use client';
import MemberCard from '@/components/micro/MemberCard';
import { getExecutive } from '@/libs/Employee';
import { ExecutiveInterface } from '@/types/app/Employee';
import { useEffect, useState } from 'react';

function EmployeeList() {
  const [data, setData] = useState<ExecutiveInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getExecutiveEmployee = async () => {
      try {
        const res = await getExecutive();
        setData(res);
        console.log(res);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          console.log(err);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    getExecutiveEmployee();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='grid gap-20 px-10 lg:px-20 xl:px-40'>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div
        data-aos='fade-up'
        className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 justify-self-center gap-20 md:gap-14 lg:gap-16 xl:gap-28'
      >
        {data
          .filter((_, idx) => idx < 3)
          .map((item) => (
            <MemberCard
              key={item.id}
              data={item}
              alt={item.name}
            />
          ))}
      </div>
      {/* Yang kedua */}
      <div
        data-aos='fade-up'
        className='grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 justify-self-center gap-20 md:gap-14 lg:gap-16 xl:gap-28'
      >
        {data
          .filter((_, idx) => idx >= 3)
          .map((item) => (
            <MemberCard
              key={item.id}
              data={item}
              alt={item.name}
            />
          ))}
      </div>
    </div>
  );
}

export default EmployeeList;
