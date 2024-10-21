import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/module/product.models';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { state } from '@angular/animations';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private cartService = inject(CartService);
  imgSrc = 'https://picsum.photos/640/640?=r';
  price = 100;
  title = 'Product Title';

  products = signal<Product[]>([]);
  cart = this.cartService.cart;

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 100,
        img: `${this.imgSrc}${Math.random()}`,
        createdAt: new Date().toDateString()
      },
      {
        id: Date.now() + 2,
        title: 'Product 2',
        price: 20,
        img: `${this.imgSrc}${Math.random()}`,
        createdAt: new Date().toDateString()
      },
      {
        id: Date.now() + 2,
        title: 'Product 3',
        price: 20,
        img: `${this.imgSrc}${Math.random()}`,
        createdAt: new Date().toDateString()
      },
      {
        id: Date.now() + 2,
        title: 'Product 3',
        price: 20,
        img: `${this.imgSrc}${Math.random()}`,
        createdAt: new Date().toDateString()
      },
      {
        id: Date.now() + 2,
        title: 'Product 3',
        price: 20,
        img: `${this.imgSrc}${Math.random()}`,
        createdAt: new Date().toDateString()
      },
      {
        id: Date.now() + 2,
        title: 'Product 3',
        price: 20,
        img: `${this.imgSrc}${Math.random()}`,
        createdAt: new Date().toDateString()
      },
    ];

    this.products.set(initProducts);
  }

 addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
