import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../../shared/services/products.service';
import { ProductPayload } from '../../../shared/interfaces/product-payload.interface';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})

export class CreateComponent {

  productService = inject(ProductsService);

  form = new FormGroup({
    title: new FormControl<String>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    price: new FormControl<Number>(0, {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl<String>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    image: new FormControl<String>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    this.productService.post({
      title: this.form.controls.title.value,
      price: 13.5,
      description: 'descrição do produto',
      image: 'https://i.ibb.co/cvpntL1/hats.png'
    }).subscribe((e) => {
      alert('Cadastrado com sucesso!');
    });
  }
}
