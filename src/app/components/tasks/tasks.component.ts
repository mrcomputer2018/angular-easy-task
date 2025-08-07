import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
})
export class TasksComponent {
    @Input() name?: string;

    addTask() {
        // Logic to add a task
        console.log('Task added');
    }
}
