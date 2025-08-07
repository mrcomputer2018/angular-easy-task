import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';

describe('TasksComponent', () => {
    let component: TasksComponent;
    let fixture: ComponentFixture<TasksComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TasksComponent, TaskComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TasksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
