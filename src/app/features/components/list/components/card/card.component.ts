import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  product = input.required<Product>();
}
