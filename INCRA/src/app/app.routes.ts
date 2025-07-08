import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';
import { NovoCadastroComponent } from './novo-cadastro/novo-cadastro.component';
import { Tela1Component } from './novo-cadastro/tela-1/tela-1.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'lista',
    component: ListaComponent,
  },
  {
    path: 'novo',
    component: NovoCadastroComponent,
    children: [
      { path: '', redirectTo: 'Titular', pathMatch: 'full' },
      { path: 'Titular', component: Tela1Component },
    ],
  },
];
