import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      stock: 10,
    },

  ]);

  addToCart(product : Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeFromCart(id : number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }


  constructor() { }
}
