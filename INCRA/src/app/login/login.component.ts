import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [provideNgxMask()],
})
export class LoginComponent {
  registrationForm: FormGroup;
  cpf: string = '';
  senha: string = '';

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log('Form Data:', this.registrationForm.value);
    } else {
      console.log('Form is invalid.');
    }
  }

  ngOnInit() {}

  get cpfUser(): AbstractControl {
    return this.registrationForm.get('cpf')!;
  }

  get senhaUser(): AbstractControl {
    return this.registrationForm.get('senha')!;
  }
}

const erroAutenticacao = '';

const mockUsuarios = [
  { cpf: '111.111.111-11', senha: '123456' },
  { cpf: '222.222.222-22', senha: 'senha123' },
  { cpf: '333.333.333-33', senha: 'abc123' },
  { cpf: '444.444.444-44', senha: 'qwerty' },
  { cpf: '555.555.555-55', senha: 'admin' },
  { cpf: '666.666.666-66', senha: 'root123' },
  { cpf: '777.777.777-77', senha: 'senha777' },
  { cpf: '888.888.888-88', senha: 'pass888' },
  { cpf: '999.999.999-99', senha: 'senha999' },
  { cpf: '000.000.000-00', senha: 'zerozero' },
];
