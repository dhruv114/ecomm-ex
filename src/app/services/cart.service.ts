import { Injectable, signal, inject } from '@angular/core';
import { Product } from '../models/products-model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  productService = inject(ProductService);

  addToCart(product : Product) {
    if (product.stock === 0) {
      return;
    }
    this.cart.set([...this.cart(), product]);
    this.productService.updateProductStock(product.id, -1);
  }

  removeFromCart(id : number) {
    // this.cart.set(this.cart().filter((p) => p.id !== id));
    const cartItems = [...this.cart()];
    const index = cartItems.findIndex((p) => p.id === id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      this.cart.set(cartItems);
      this.productService.updateProductStock(id, 1);
    }
  }


  constructor() { }
}
