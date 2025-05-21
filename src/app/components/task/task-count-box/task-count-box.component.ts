import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-count-box',
  templateUrl: './task-count-box.component.html',
  styleUrls: ['./task-count-box.component.css']
})
export class TaskCountBoxComponent {
  @Input() title: string = '';
  @Input() count: number = 0;
  @Input() color: string = '#000'; // Color del borde
}