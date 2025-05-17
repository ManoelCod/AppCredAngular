import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCreditoComponent } from './components/lista-credito/lista-credito.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, ListaCreditoComponent] 
})
export class AppComponent {
  title = 'appcred';
}