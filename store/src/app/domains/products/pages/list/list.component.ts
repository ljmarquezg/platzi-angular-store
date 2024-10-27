import { Component, computed, inject, input, Input, signal, SimpleChanges } from '@angular/core';
import { state } from '@angular/animations';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/module/product.model';
import { HeaderComponent } from "@shared/components/header/header.component";
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/module/category.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input() category_id?: string;
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  cart = this.cartService.cart;

  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  private getProducts() {
    this.productService.getProducts(this.category_id).subscribe({
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

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories: Category[]) => {
        this.categories.set(categories);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
