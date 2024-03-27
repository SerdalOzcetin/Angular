import { Product } from './product';

export class ProductRepository {
  productList = ['iphone 13', 'iphone 14', 'iphone 15', 'iphone 16'];
  private products: Product[] = [
    {
      id: 1,
      name: 'Iphone 15',
      price: 20000,
      imageURL: '1.jpeg',
      isActive: true,
      description: 'Good Phone...',
    },
    {
      id: 2,
      name: 'Iphone 16',
      price: 20000,
      imageURL: '2.jpeg',
      isActive: false,
      description: 'Good Phone...',
    },
    {
      id: 3,
      name: 'Iphone 17',
      price: 20000,
      imageURL: '3.jpeg',
      isActive: true,
      description: 'Good Phone...',
    },
  ];
  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }

  getProductById(id: number) {
    return this.products.find((p) => p.id == id);
  }
}
