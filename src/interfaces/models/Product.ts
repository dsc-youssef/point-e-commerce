export interface ProductProps {
  name: string,
  description?: string,
  price: number,
  discount?: number,
  image?: string,
  images?: string[],
  rate?: number,
  id?: number | string,
  key?: number | string,
  className?: string,
  category?: string,
  quantity?: number
};
