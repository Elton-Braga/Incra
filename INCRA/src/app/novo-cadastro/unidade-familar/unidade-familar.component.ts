import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-unidade-familar',
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,

  templateUrl: './unidade-familar.component.html',
  styleUrl: './unidade-familar.component.scss',
})
export class UnidadeFamilarComponent {
  formgroup!: FormGroup;

  situacao_conjugal!: FormControl;
  data_uniao!: FormControl;
  data_separacao!: FormControl;
  renda_familiar!: FormControl;
  nome_dependente!: FormControl;
  tipo_dependente!: FormControl;
  nome!: FormControl;
  data_nascimento!: FormControl;
  data_na_familia!: FormControl;
  cpf_dependente!: FormControl;
  associacao_unidade_familiar!: FormControl;

  s_conjugal: any[] = [
    { value: '0', viewValue: 'Casado' },
    { value: '1', viewValue: 'Solteiro' },
    { value: '2', viewValue: 'Divorciado' },
    { value: '3', viewValue: 'Viúvo' },
    { value: '4', viewValue: 'União estável' },
  ];

  t_dependente: any[] = [
    { value: '0', viewValue: 'agregado' },
    { value: '1', viewValue: 'Conjuge' },
    { value: '2', viewValue: 'Pai' },
    { value: '3', viewValue: 'Filho' },
    { value: '4', viewValue: 'Mãe' },
    { value: '4', viewValue: 'Outros' },
  ];

  constructor(private fb: FormBuilder) {
    this.formgroup = this.fb.group({
      situacao_conjugal: ['', Validators.required],
      data_uniao: ['', Validators.required],
      data_separacao: [''],
      renda_familiar: ['', [Validators.required, Validators.min(0)]],
      nome_dependente: ['', Validators.required],
      tipo_dependente: ['', Validators.required],
      nome: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      data_na_familia: ['', Validators.required],
      cpf_dependente: [
        '',
        [Validators.required, Validators.pattern(/^\d{11}$/)],
      ],
      associacao_unidade_familiar: ['', Validators.required],
    });

    this.situacao_conjugal = this.formgroup.get(
      'situacao_conjugal'
    ) as FormControl;
    this.data_uniao = this.formgroup.get('data_uniao') as FormControl;
    this.data_separacao = this.formgroup.get('data_separacao') as FormControl;
    this.renda_familiar = this.formgroup.get('renda_familiar') as FormControl;
    this.nome_dependente = this.formgroup.get('nome_dependente') as FormControl;
    this.tipo_dependente = this.formgroup.get('tipo_dependente') as FormControl;
    this.nome = this.formgroup.get('nome') as FormControl;
    this.data_nascimento = this.formgroup.get('data_nascimento') as FormControl;
    this.data_na_familia = this.formgroup.get('data_na_familia') as FormControl;
    this.cpf_dependente = this.formgroup.get('cpf_dependente') as FormControl;
    this.associacao_unidade_familiar = this.formgroup.get(
      'associacao_unidade_familiar'
    ) as FormControl;
  }
}
