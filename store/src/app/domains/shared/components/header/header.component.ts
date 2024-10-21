import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { Product } from '../../module/product.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private cartService = inject(CartService);

  hideSideMenu = signal(true);
  cart = this.cartService.cart;
  cartTotal = this.cartService.total;
  total = signal(0);

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
