import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks = signal([
    'Instalar Angualr CLI',
    'Crear un nuevo proyecto',
    'Crear un componente',
    'Crear un servicio',
  ]);
  
}
