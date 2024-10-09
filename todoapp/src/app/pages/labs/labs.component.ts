import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  tasks = signal([
    'Instalar Angualr CLI',
    'Crear un nuevo proyecto',
    'Crear un componente',
  ]);
  
  name = signal('Labs');
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
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    this.name.set(input.value);
  }

  keyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
