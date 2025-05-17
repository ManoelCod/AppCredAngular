import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListaCreditoComponent } from './components/lista-credito/lista-credito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet,FormsModule, ListaCreditoComponent,CommonModule]

})
export class AppComponent {
  title = 'appcred';
}