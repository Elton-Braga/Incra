import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'lista',
    component: ListaComponent,
  },
];
