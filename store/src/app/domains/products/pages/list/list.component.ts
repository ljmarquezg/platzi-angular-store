import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/module/product.models';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { state } from '@angular/animations';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  imgSrc = 'https://picsum.photos/640/640?=r';
  price = 100;
  title = 'Product Title';

  products = signal<Product[]>([]);
  cart = this.cartService.cart;

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {

        '["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3t_bS8mNcYHIna9HbERQSOujwQ7i8jQXcQ&s"'

        const items = products.map(product => ({
          ...product,
          images: product.images.map(a => a.replace(/\["|"\]/g, '')),
        }));
        this.products.set(items);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
