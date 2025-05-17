import { Component, OnInit } from '@angular/core';
import { ApicredService } from '../../services/apicred.service';

@Component({
  selector: 'app-lista-credito',
  templateUrl: './lista-credito.component.html',
  styleUrls: ['./lista-credito.component.css']
})
export class ListaCreditoComponent implements OnInit {
  creditos: any[] = [];

  constructor(private apicredService: ApicredService) {}

  ngOnInit(): void {
    this.apicredService.getCreditos().subscribe((data) => {
      this.creditos = data;
    });
  }
}