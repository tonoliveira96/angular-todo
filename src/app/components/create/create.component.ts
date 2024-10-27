import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskProps } from '../../types/types';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  task: string = "";

  @Output() adicionarItem = new EventEmitter<TaskProps>();
  
  addItem(): void {
    let item: TaskProps = {
      completed: false,
      title: this.task.trim()
    }
    
    this.adicionarItem.emit(item);
    this.task = "";
  }
}
