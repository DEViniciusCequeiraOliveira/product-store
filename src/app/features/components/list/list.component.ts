import { Component, inject } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';
import { ProductsService } from '../../../shared/services/products.service';
import { CardComponent } from './components/card/card.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = []
  
  productService = inject(ProductsService);

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products
    })
  }

}
