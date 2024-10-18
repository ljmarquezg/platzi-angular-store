import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/module/product.models';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
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
