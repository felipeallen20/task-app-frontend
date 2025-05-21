import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskCounterComponent } from './components/task/task-counter/task-counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-app';
}
