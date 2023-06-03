export interface Product {
  id: number,
  name: string,
  price: number,
  imageURL : string
}

export type ProductWithoutId = Omit<Product, 'id'>;
