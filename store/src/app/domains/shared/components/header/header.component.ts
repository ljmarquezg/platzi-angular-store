import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref],
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
