import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
  
  newTitleCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });

  changeHandler() {
    const value = this.newTitleCtrl.value;

    if (this.newTitleCtrl.valid && value.trim().length > 0) {    
      this.addTask(value);
      this.newTitleCtrl.setValue('');
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

  updateTaskEditMode(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            editing: !task.editing,
          }
        }
        return {
          ...task,
          editing: false,
        };
      });
    })
  }

  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            title: input.value,
            editing: false,
          }
        }
        return task;
      });
    })
  }
}
