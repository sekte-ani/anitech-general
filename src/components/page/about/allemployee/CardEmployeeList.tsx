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
    <div className='flex justify-center gap-20'>
      <div
        data-aos='fade-up'
        className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-10 gap-y-10 md:gap-y-16'
      >
        {data.map((item) => (
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
