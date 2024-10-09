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
  disabled = true;
  img = 'https://angular.io/assets/images/logos/angular/angular.png';

  person = {
    name:'Labs',
    age: 30,
    disabled: true,
    avatar: 'https://angular.io/assets/images/logos/angular/angular.png',
  }

  clickHandler() {
    alert('Hello Labs');
  }

  changeHandler(event: Event) {
    console.log(event);
  }

  keyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
