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

  addToArray(item: TaskProps){
    console.log(item)
    this.tasks.push(item)
  }
}
