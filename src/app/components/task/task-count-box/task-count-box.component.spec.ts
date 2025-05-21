import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCountBoxComponent } from './task-count-box.component';

describe('TaskCountBoxComponent', () => {
  let component: TaskCountBoxComponent;
  let fixture: ComponentFixture<TaskCountBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCountBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
