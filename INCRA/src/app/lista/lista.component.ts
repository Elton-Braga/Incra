import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-lista',
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'beneficiario',
    'data_transferencia',
    'codigo',
    'nome_projeto',
    'acoes',
  ];
  dataSource = new MatTableDataSource<Beneficiario>(MOCK_BENEFICIARIOS);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  form!: FormGroup;
  codigo_beneficiario: any;
  codigo_peojeto: any;
  cpf: any;
  ordem: any;

  toppings = new FormControl('');
  tipo_busca: string[] = ['Nome do Beneficiario', 'Codigo do Beneficiario'];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      codigo_beneficiario: [],
      codigo_projeto: [],
      cpf: [],
      ordem: [],
      tipo_busca: [],
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  formatarData(dataNumerica: number): string {
    const str = dataNumerica.toString();
    const ano = +str.substring(0, 4);
    const mes = +str.substring(4, 6) - 1;
    const dia = +str.substring(6, 8);
    const data = new Date(ano, mes, dia);
    return new Intl.DateTimeFormat('pt-BR').format(data);
  }

  executarAcao(acao: string, elemento: Beneficiario) {
    console.log(`Ação "${acao}" executada para CPF ${elemento.beneficiario}`);
    // Aqui você pode redirecionar, abrir modal, etc.
  }
}

/*area de mock */

export interface Beneficiario {
  beneficiario: string;
  data_transferencia: number;
  codigo: number;
  nome_projeto: string;
  acoes: any;
}

export const MOCK_BENEFICIARIOS: Beneficiario[] = [
  {
    beneficiario: '12345678900',
    data_transferencia: 20240115,
    codigo: 101,
    nome_projeto: 'Projeto Esperança',
    acoes: ['visualizar', 'editar'],
  },
  {
    beneficiario: '23456789011',
    data_transferencia: 20240210,
    codigo: 102,
    nome_projeto: 'Projeto Liberdade',
    acoes: ['visualizar'],
  },
  {
    beneficiario: '34567890122',
    data_transferencia: 20240305,
    codigo: 103,
    nome_projeto: 'Projeto Vida Nova',
    acoes: ['editar'],
  },
  {
    beneficiario: '45678901233',
    data_transferencia: 20240401,
    codigo: 104,
    nome_projeto: 'Projeto Cidadania',
    acoes: ['visualizar', 'remover'],
  },
  {
    beneficiario: '56789012344',
    data_transferencia: 20240510,
    codigo: 105,
    nome_projeto: 'Projeto Esperança',
    acoes: ['visualizar', 'editar', 'remover'],
  },
  {
    beneficiario: '67890123455',
    data_transferencia: 20240612,
    codigo: 106,
    nome_projeto: 'Projeto Sementes',
    acoes: ['visualizar'],
  },
  {
    beneficiario: '78901234566',
    data_transferencia: 20240720,
    codigo: 107,
    nome_projeto: 'Projeto Terra Livre',
    acoes: ['editar'],
  },
  {
    beneficiario: '89012345677',
    data_transferencia: 20240830,
    codigo: 108,
    nome_projeto: 'Projeto Raízes',
    acoes: ['remover'],
  },
  {
    beneficiario: '90123456788',
    data_transferencia: 20240901,
    codigo: 109,
    nome_projeto: 'Projeto Água Doce',
    acoes: ['visualizar', 'editar'],
  },
  {
    beneficiario: '01234567899',
    data_transferencia: 20241015,
    codigo: 110,
    nome_projeto: 'Projeto Recomeço',
    acoes: ['visualizar'],
  },
  {
    beneficiario: '11223344556',
    data_transferencia: 20240120,
    codigo: 111,
    nome_projeto: 'Projeto Horizonte',
    acoes: ['visualizar', 'remover'],
  },
  {
    beneficiario: '22334455667',
    data_transferencia: 20240225,
    codigo: 112,
    nome_projeto: 'Projeto Semente Viva',
    acoes: ['editar'],
  },
  {
    beneficiario: '33445566778',
    data_transferencia: 20240330,
    codigo: 113,
    nome_projeto: 'Projeto Novo Caminho',
    acoes: ['visualizar'],
  },
  {
    beneficiario: '44556677889',
    data_transferencia: 20240412,
    codigo: 114,
    nome_projeto: 'Projeto Brasil Verde',
    acoes: ['editar', 'remover'],
  },
  {
    beneficiario: '55667788990',
    data_transferencia: 20240518,
    codigo: 115,
    nome_projeto: 'Projeto Vale Rural',
    acoes: ['visualizar', 'editar'],
  },
  {
    beneficiario: '66778899001',
    data_transferencia: 20240622,
    codigo: 116,
    nome_projeto: 'Projeto Esperança',
    acoes: ['remover'],
  },
  {
    beneficiario: '77889900112',
    data_transferencia: 20240728,
    codigo: 117,
    nome_projeto: 'Projeto Liberdade',
    acoes: ['visualizar'],
  },
  {
    beneficiario: '88990011223',
    data_transferencia: 20240831,
    codigo: 118,
    nome_projeto: 'Projeto Cidadania',
    acoes: ['editar'],
  },
  {
    beneficiario: '99001122334',
    data_transferencia: 20240905,
    codigo: 119,
    nome_projeto: 'Projeto Raízes',
    acoes: ['visualizar', 'editar'],
  },
  {
    beneficiario: '10011223345',
    data_transferencia: 20241020,
    codigo: 120,
    nome_projeto: 'Projeto Terra Livre',
    acoes: ['remover'],
  },
];
