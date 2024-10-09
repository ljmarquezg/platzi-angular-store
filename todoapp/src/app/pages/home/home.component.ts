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
  
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;

    if (newTask) {
      this.tasks.update((tasks) => [...tasks, newTask]);
    }

    input.value = '';
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }
}
