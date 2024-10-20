import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../module/product.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input({required: true}) cart: Product[] = [];
  hideSideMenu = signal(true);
  cartTotal = signal(0);

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  totalCart(): number {
    return this.cart.reduce((acc, product) => acc + product.price, 0);
  }

  ngOnChanges(changes: SimpleChanges) {
    const cart = changes['cart'];
    if(cart) {
      this.cartTotal.set(this.totalCart());
    }
  }
}
