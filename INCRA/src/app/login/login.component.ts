import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  ValidaFofrm = new FormControl({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  ngOnInit() {
    this.ValidaFofrm;
  }
}
