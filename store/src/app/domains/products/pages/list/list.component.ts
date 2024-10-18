import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/module/product.models';
import { HeaderComponent } from "../../../shared/components/header/header.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  imgSrc = 'https://picsum.photos/640/640?=r';
  price = 100;
  title = 'Product Title';

  products = signal<Product[]>([]);

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

  fromChild(event: string) {
    console.log(event)
  }
}
