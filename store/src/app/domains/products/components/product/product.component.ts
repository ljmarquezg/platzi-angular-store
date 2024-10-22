import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/module/product.models';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe, 
    DatePipe,
    UpperCasePipe,
    ReversePipe,
    TimeAgoPipe
  ],

  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input({required: true}) product!: Product;
  @Output() addToCart: EventEmitter<string> = new EventEmitter<string>();

  addToCartHandler() {
    this.addToCart.emit('Producto seleccionado: ' + this.product.title);
  }
}
