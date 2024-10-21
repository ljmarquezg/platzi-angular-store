import { computed, Injectable, Signal, signal } from '@angular/core';
import { Product } from '../module/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total: Signal<number> = computed(() => {
    const cart = this.cart();
    return cart.reduce((acc, product) => acc + product.price, 0);
  });

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(statePrev => [...statePrev, product]);
  }
}
