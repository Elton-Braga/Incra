import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskConfig, NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-tela-1',
  imports: [
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
  ],
  templateUrl: './tela-1.component.html',
  styleUrl: './tela-1.component.scss',
  providers: [provideNgxMask(), provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tela1Component {
  formgroup!: FormGroup;
  nome!: FormControl;
  cpf!: FormControl;
  apelido!: FormControl;
  genero!: FormControl;
  data_nasc!: FormControl;
  estado_civil!: FormControl;
  data_falecimento!: FormControl;
  pai!: FormControl;
  mae!: FormControl;
  nacionalidade!: FormControl;
  naturalidade!: FormControl;
  municipio!: FormControl;
  cod_municipio!: FormControl;
  tipo_identificaçao!: FormControl;
  numero!: FormControl;
  orgao_expedicao!: FormControl;
  data_expedicao!: FormControl;
  nis!: FormControl;
  telefone!: FormControl;
  email!: FormControl;
  numero_processo!: FormControl;

  constructor(fb: FormBuilder) {
    this.formgroup = fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      apelido: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      data_nasc: ['', [Validators.required]],
      estado_civil: ['', [Validators.required]],
      data_falecimento: ['', [Validators.required]],
      pai: ['', [Validators.required]],
      mae: ['', [Validators.required]],
      nacionalidade: ['', [Validators.required]],
      naturalidade: ['', [Validators.required]],
      municipio: ['', [Validators.required]],
      cod_municipio: ['', [Validators.required]],
      tipo_identificacao: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      orgao_expedicao: ['', [Validators.required]],
      data_expedicao: ['', [Validators.required]],
      nis: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numero_processo: ['', [Validators.required]],
    });

    this.nome = this.formgroup.get('nome') as FormControl;
    this.cpf = this.formgroup.get('cpf') as FormControl;
    this.apelido = this.formgroup.get('apelido') as FormControl;
    this.genero = this.formgroup.get('genero') as FormControl;
    this.data_nasc = this.formgroup.get('data_nasc') as FormControl;
    this.estado_civil = this.formgroup.get('estado_civil') as FormControl;
    this.data_falecimento = this.formgroup.get(
      'data_falecimento'
    ) as FormControl;
    this.pai = this.formgroup.get('pai') as FormControl;
    this.mae = this.formgroup.get('mae') as FormControl;
    this.nacionalidade = this.formgroup.get('nacionalidade') as FormControl;
    this.naturalidade = this.formgroup.get('naturalidade') as FormControl;
    this.municipio = this.formgroup.get('municipio') as FormControl;
    this.cod_municipio = this.formgroup.get('cod_municipio') as FormControl;
    this.tipo_identificaçao = this.formgroup.get(
      'tipo_identificaçao'
    ) as FormControl;
    this.numero = this.formgroup.get('numero') as FormControl;
    this.orgao_expedicao = this.formgroup.get('orgao_expedicao') as FormControl;
    this.data_expedicao = this.formgroup.get('data_expedicao') as FormControl;
    this.nis = this.formgroup.get('nis') as FormControl;
    this.telefone = this.formgroup.get('telefone') as FormControl;
    this.email = this.formgroup.get('email') as FormControl;
    this.numero_processo = this.formgroup.get('numero_processo') as FormControl;
  }

  ngOnInit() {}

  selectedValue!: string;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
