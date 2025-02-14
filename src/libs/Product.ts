import { URL } from '@/config/endpoint';
import { Product, ProductResponse } from '@/types/app/Product';
import axios from 'axios';

export const getProduct = async (): Promise<Product[]> => {
  const response = await axios.get<ProductResponse>(`${URL}/product`);
  return response.data.data; // Mengambil hanya array data produk
};
