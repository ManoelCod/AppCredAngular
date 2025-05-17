import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApicredService, Credito } from '../../services/apicred.service';

@Component({
  standalone: true,
  selector: 'app-lista-credito',
  templateUrl: './lista-credito.component.html',
  styleUrls: ['./lista-credito.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ListaCreditoComponent {
  filtroNfse = '';
  filtroNumero = '';
  creditos: Credito[] = [];

  constructor(private apiCredService: ApicredService) {}

  buscarPorNfse() {
    this.apiCredService.getCreditosPorNfse(this.filtroNfse).subscribe(dados => {
      this.creditos = dados;
      console.log('Dados recebidos:', dados); 
    });
  }

 buscarPorNumeroCredito(): void {
  if (this.filtroNumero) {
    this.apiCredService.getCreditosPorNumero(this.filtroNumero).subscribe((dado: Credito) => {
      this.creditos = dado ? [dado] : [];
    });
  }
}

}