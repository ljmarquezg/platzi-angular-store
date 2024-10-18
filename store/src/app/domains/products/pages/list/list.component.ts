import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  img = `https://picsum.photos/640/640?=r${Math.random()}`
  price = 100
  title = 'Product Title'

  fromChild(event: string) {
    console.log(event)
  }
}
