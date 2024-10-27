import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { TaskComponent } from './components/task/task.component';
import { TaskProps } from './types/types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, CreateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-todo';
  tasks: TaskProps[] = [];

  addToArray(item: TaskProps) {
    this.tasks.push(item);
  }

  completeTask(id: number){
    this.tasks[id].completed = !this.tasks[id].completed
  }

  deleteTask(id: number){
    this.tasks.splice(id, 1)
  }

  getAmount() {
    return this.tasks.length;
  }

  getDone() {
    return this.tasks?.filter(task => task.completed).length;
  }
}
