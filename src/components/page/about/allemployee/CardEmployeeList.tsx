'use client';
import MemberCard from '@/components/micro/MemberCard';
import { getEmployee } from '@/libs/EmployeeDivision';
import { EmployeeInterface } from '@/types/app/Employee';
import { useEffect, useState } from 'react';

interface CardEmployeeListProps {
  division: string;
}

function CardEmployeeList({ division }: CardEmployeeListProps) {
  const [data, setData] = useState<EmployeeInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        setError(null);

        const res = await getEmployee(division);

        if (!res || res.length === 0) {
          setNotFound(true);
        } else {
          setData(res);
        }

        console.log(res);
      } catch (err) {
        if (err instanceof Error) {
          if (err.message.includes('Division Not Found')) {
            setNotFound(true);
          } else {
            setError(err.message);
          }
          console.log(err);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, [division]);

  if (loading) return <p className='text-center text-lg'>Loading...</p>;
  if (error) return <p className='text-center text-lg text-red-500'>{error}</p>;
  if (notFound)
    return (
      <p className='text-center text-lg text-gray-500'>
        Data tidak ditemukan untuk divisi <strong>{division}</strong>.
      </p>
    );

  return (
    <div className='grid gap-20 px-10 lg:px-20 xl:px-40'>
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

export default CardEmployeeList;
