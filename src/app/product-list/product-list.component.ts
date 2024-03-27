import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  product = {
    id: 1,
    name: 'Iphone 15',
    price: 20000,
    iamgeURL: '1.jpeg',
    isActive: true,
    description: 'Good Phone...',
  };

  productList = ['iphone 13', 'iphone 14', 'iphone 15', 'iphone 16'];
  private products: any[] = [
    {
      id: 1,
      name: 'Iphone 15',
      price: 20000,
      iamgeURL: '1.jpeg',
      isActive: true,
      description: 'Good Phone...',
    },
    {
      id: 2,
      name: 'Iphone 16',
      price: 20000,
      iamgeURL: '2.jpeg',
      isActive: false,
      description: 'Good Phone...',
    },
    {
      id: 3,
      name: 'Iphone 17',
      price: 20000,
      iamgeURL: '3.jpeg',
      isActive: true,
      description: 'Good Phone...',
    },
  ];
  getProducts() {
    return this.products.filter((p) => p.isActive);
  }
}
