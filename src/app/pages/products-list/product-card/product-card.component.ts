import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products-model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, CommonModule],
  template: `
    <div 
    class='bg-white shadow-md border rounded-xl p-6 flex flex-col gap-6 relative'
    >
      <div class='mx-auto flex flex-col items-center gap-2'>
        <img 
          [src]="product().image"
          class='w-[200px] h-[100px] object-contain'
          />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-sm"> {{ '$' + product().price }}</span>
          <app-primary-button 
            label="Add to Cart"
            [buttonClass]="product().stock === 0 ? 'bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:bg-gray-500' : 'bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90'"
            (btnClicked)="cartService.addToCart(product())"/>
        </div>
        
        <span 
        class="absolute top-2 right-3 text-sm font-bold" 
        [class]="product().stock ? 'text-green-500' : 'text-red-500'"
        >
          @if (product().stock) {
            {{ product().stock }} left
          } @else {
            Out of stock
          }
        </span>
      </div>  
    </div>
  `,
  styles: `
    .hover\:gray-500:hover {
      background-color: gray;
    }
  `
})
export class ProductCardComponent {

  cartService = inject(CartService);

  product = input.required<Product>();
}
