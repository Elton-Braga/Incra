import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-novo-cadastro',
  imports: [
    MatButtonModule,
    RouterLink,
    BreadcrumbModule,
    RouterOutlet,
    NgIf,
    MatIconModule,
  ],
  templateUrl: './novo-cadastro.component.html',
  styleUrl: './novo-cadastro.component.scss',
})
export class NovoCadastroComponent {
  items: any[] = [];
  home = { icon: 'pi pi-home', routerLink: '/inicio' };

  etapas = ['Titular'];
  etapaAtualIndex = 0;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.atualizarBreadcrumb();

    this.route.firstChild?.url.subscribe((urlSegment) => {
      const etapa = urlSegment[0]?.path;
      this.etapaAtualIndex = this.etapas.indexOf(etapa);
      this.atualizarBreadcrumb();
    });
  }

  atualizarBreadcrumb() {
    this.items = this.etapas
      .slice(0, this.etapaAtualIndex + 1)
      .map((etapa) => ({
        label: this.capitalizar(etapa),
      }));
  }

  capitalizar(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  voltar() {
    if (this.etapaAtualIndex > 0) {
      const rota = this.etapas[this.etapaAtualIndex - 1];
      this.router.navigate(['../' + rota], { relativeTo: this.route });
    }
  }

  avancar() {
    // Tenta salvar os dados da tela atual, se houver
    if ((window as any).salvarFormTela1) {
      (window as any).salvarFormTela1();
    }

    if (this.etapaAtualIndex < this.etapas.length - 1) {
      const rota = this.etapas[this.etapaAtualIndex + 1];
      this.router.navigate(['../' + rota], { relativeTo: this.route });
    }
  }

  ehUltimaEtapa(): boolean {
    return this.etapaAtualIndex === this.etapas.length - 1;
  }

  salvar() {
    console.log('Dados salvos!', this.avancar());
    // Aqui poderá chamar serviço de API, exibir snackbar etc.
  }
}
