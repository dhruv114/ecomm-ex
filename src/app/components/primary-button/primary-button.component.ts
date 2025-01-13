import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-primary-button',
  imports: [CommonModule],
  template: `
    <button [ngClass]="buttonClass()" (click)='btnClicked.emit()'>
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class PrimaryButtonComponent {
  label = input('');
  buttonClass = input('bg-blue-500 text-white w-full border px-5 py-2 rounded-xl shadow-md hover:opacity-90')
  btnClicked = output();

}
