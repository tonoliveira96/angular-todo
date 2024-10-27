import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskProps } from '../../types/types';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: TaskProps;
  @Input() id!: number;

  @Output() deleteItem = new EventEmitter<number>();
  @Output() completeItem = new EventEmitter<number>();

  delete() {
    this.deleteItem.emit(this.id);
  }

  complete() {
    this.completeItem.emit(this.id);
  }
}
