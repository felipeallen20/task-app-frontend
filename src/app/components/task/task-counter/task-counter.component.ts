import { Component } from '@angular/core';
import { TaskCountBoxComponent } from '../task-count-box/task-count-box.component';

@Component({
  selector: 'app-task-counter',
  imports: [TaskCountBoxComponent],
  templateUrl: './task-counter.component.html',
  styleUrl: './task-counter.component.css'
})
export class TaskCounterComponent {

}
