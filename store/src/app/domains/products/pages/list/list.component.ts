import { Component, inject, signal } from '@angular/core';
import { state } from '@angular/animations';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/module/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

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

  products = signal<Product[]>([]);
  cart = this.cartService.cart;

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
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
