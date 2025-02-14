import { URL } from '@/config/endpoint';
import { EmployeeInterface } from '@/types/app/Employee';
import axios from 'axios';

export const getEmployee = async (division: string): Promise<EmployeeInterface[]> => {
  try {
    const response = await axios.get<{ data: EmployeeInterface[] }>(
      `${URL}/employee?division=${encodeURIComponent(division)}`,
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
};
