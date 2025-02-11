import axios from 'axios';
import { URL } from './endpoint';

export interface ExecutiveInterface {
  id: number;
  name: string;
  role_name: string[];
  images: string;
}

export const getExecutive = async (): Promise<ExecutiveInterface[]> => {
  const response = await axios.get<{ data: ExecutiveInterface[] }>(
    `${URL}/structure`,
  );
  return response.data.data;
};
