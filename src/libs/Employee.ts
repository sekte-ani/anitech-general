import { URL } from '@/config/endpoint';
import { ExecutiveInterface } from '@/types/app/Employee';
import axios from 'axios';

export const getExecutive = async (): Promise<ExecutiveInterface[]> => {
  const response = await axios.get<{ data: ExecutiveInterface[] }>(
    `${URL}/structure`,
  );
  return response.data.data;
};
