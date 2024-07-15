import { Component, inject } from '@angular/core';
import { Product } from '../../../shared/interfaces/product.interface';

import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../../shared/services/products.service';


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
  router = inject(Router);

  ngOnInit() {
    this.productService.getAll().subscribe((products) => {
      this.products = products
    })
  }

  onEdit() {
    debugger;
    this.router.navigateByUrl('/edit-product')
  }

}
