import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';

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
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

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
      price: this.form.controls.price.value,
      description: this.form.controls.description.value,
      image: this.form.controls.image.value
    }).subscribe(() => {
      this.matSnackBar.open(
        'Cadastrado com sucesso!',
        undefined,
        {
          duration: 3000
        });

      this.router.navigateByUrl('/');
    });
  }
}
