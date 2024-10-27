import { Component } from '@angular/core';
import { TaskProps } from '../../types/types';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task: TaskProps | undefined
}
