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
  credito?: Credito;
  creditos: Credito[] = []; 
  filtroNfse: string = '';
  filtroNumero: string = '';

  constructor(private apicredService: ApicredService) {}

buscarPorNfse(): void {
  if (this.filtroNfse) {
    this.apicredService.getCreditosPorNfse(this.filtroNfse).subscribe(data => {
      this.creditos = data ?? [];  // ✅ Agora armazenamos uma lista de créditos
    });
  }
}

buscarPorNumeroCredito(): void {
  if (this.filtroNumero) {
    this.apicredService.getCreditosPorNumero(this.filtroNumero).subscribe(data => {
      this.creditos = data ?? [];  // ✅ Garantindo que é uma lista de créditos
    });
  }
}

}