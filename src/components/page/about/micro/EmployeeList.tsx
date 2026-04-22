"use client";
import MemberCard from "@/components/micro/MemberCard";
import { getExecutive } from "@/libs/Employee";
import { ExecutiveInterface } from "@/types/app/Employee";
import { useEffect, useState } from "react";

function EmployeeList() {
  const [data, setData] = useState<ExecutiveInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    const getExecutiveEmployee = async () => {
      try {
        setLoading(true);
        setNotFound(false);
        setError(null);
        const res = await getExecutive();

        if (!res || res.length === 0) {
          setNotFound(true);
        } else {
          setData(res);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    getExecutiveEmployee();
  }, []);

  if (loading) return (
    <div className="flex justify-center py-16">
      <div className="flex items-center gap-3 text-[#4C9DAE]">
        <div className="w-5 h-5 border-2 border-[#4C9DAE] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-sm font-medium">Memuat data...</span>
      </div>
    </div>
  );
  if (error) return (
    <p className="text-center text-red-500/70 py-8 text-sm">{error}</p>
  );

  return (
    <div className="flex justify-center">
      <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {data.map((item) => (
          <MemberCard key={item.id} data={item} alt={item.name} />
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
