import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  tasks = [
    'Instalar Angualr CLI',
    'Crear un nuevo proyecto',
    'Crear un componente',
  ]
  name = 'Labs';
  age = 30;
}
