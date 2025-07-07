import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-novo-cadastro',
  imports: [MatButtonModule, RouterLink, BreadcrumbModule, RouterOutlet],
  templateUrl: './novo-cadastro.component.html',
  styleUrl: './novo-cadastro.component.scss',
})
export class NovoCadastroComponent {
  item: string = '';
  items: any[] | undefined;

  home: any | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Tela 1' },
      { label: 'Tela 2' },
      { label: 'Tela 3' },
      { label: 'Tela 4' },
      { label: 'Tela 5' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
