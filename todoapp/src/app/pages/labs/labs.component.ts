
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [ReactiveFormsModule],
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

  person = signal({
    name:'Labs',
    age: 5,
    disabled: true,
    avatar: 'https://angular.io/assets/images/logos/angular/angular.png',
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl('100');
  nameCtrl = new FormControl(50, {
    nonNullable: true,
    validators: [
    Validators.required,
    Validators.minLength(1),
    ]
  });

  constructor() {
    this.colorCtrl.valueChanges.subscribe((color) => {
      console.log(color);
    });
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

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.person.update((person) => ({
      ...person,
      name: input.value,
    }));
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    this.person.update((person) => ({
      ...person,
      age: parseInt(input.value),
    }));
  }
}
