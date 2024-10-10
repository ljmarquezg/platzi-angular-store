import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../../models/task.model';

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
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar Angualr CLI',
      completed: false,
    },
    {
      id: Date.now() + 1,
      title: 'Crear un nuevo proyecto',
      completed: false,
    },
    {
      id: Date.now() + 2,
      title: 'Crear un componente',
      completed: false,
    },
    {
      id: Date.now() + 3,
      title: 'Crear un servicio',
      completed: false,
    },
  ]);
  
  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const title = input.value;

    if (title) {
      this.addTask(title);
      input.value = '';
    }
  }

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
  }

  updateTaskStatus(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task;
      });
    })
  }
}
