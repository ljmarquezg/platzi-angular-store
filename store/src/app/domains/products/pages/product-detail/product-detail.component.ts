import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, inject, Input, signal, Signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '@shared/module/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    CommonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product: WritableSignal<Product | null> = signal<Product | null>(null);
  cover = signal<string>('');

  ngOnInit() {
    if(this.id) {
      this.productService.getOne(this.id).subscribe({
        next: (product: Product) => {
          const item = {
            ...product,
            images: product.images.map(a => a.replace(/\["|"\]/g, '')),
          };
          if(product.images.length > 0) {
            this.cover.set(product.images[0]);
          }
          this.product.set(item);
        }
      });
    }
  }

  changeCoverImage(image: string) {
    this.cover.set(image);
  }

  addToCart() {
    const product = this.product();
    if(product ) {
      this.cartService.addToCart(product);
    }
  }
}
