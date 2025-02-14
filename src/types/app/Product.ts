export interface Product {
    id: number;
    name: string;
    description: string;
    images: string;
  }
  
export interface ProductResponse {
    data: Product[];
    message: string;
}
  