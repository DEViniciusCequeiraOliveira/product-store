import { Component, EventEmitter, Output, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../../shared/interfaces/product.interface';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>();

  @Output() edit = new EventEmitter();

  onEdit() {
    debugger;
    this.edit.emit();
  }
}
