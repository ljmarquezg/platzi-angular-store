import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, Injector, OnInit, signal } from '@angular/core';
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
export class HomeComponent implements OnInit {
  tasks = signal<Task[]>([]);
  
  injector = inject(Injector);

  newTitleCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });

  filter = signal<'all' | 'pending' | 'completed'>('all');
  taskByFilter = computed(() => {
    const filter = this.filter();
    const tasks = this.tasks();

    switch (true) {
      case (filter === 'pending'): {
        return tasks.filter((task) => !task.completed);
      };

      case (filter === 'completed'): {
        return tasks.filter((task) => task.completed);
      }

      default: {
        return tasks
      }
    }
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

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => id !== task.id));
  }

  updateTaskStatus(id: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task;
      });
    })
  }

  updateTaskEditMode(id: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
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

  updateTaskText(id: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.tasks.update((tasks) => {
      return tasks.map((task) => {
        if (task.id === id) {
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

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter);
  }

  ngOnInit() {
    const storage = localStorage.getItem('tasks');
    if(storage) {
      this.tasks.set(JSON.parse(storage));
    }
    this.trackTask();
  }

  trackTask(){
    effect(() => {
      const tasks = this.tasks();
      localStorage.setItem('tasks', JSON.stringify(tasks));
      console.log('effect', this.tasks);
    }, {injector: this.injector});
  }
}
