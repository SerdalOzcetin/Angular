import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product.repo';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[];
  productRepository: ProductRepository;
  constructor() {
    this.productRepository = new ProductRepository();
    this.products = this.productRepository.getProducts();
  }
  ngOnInit(): void {}
}
