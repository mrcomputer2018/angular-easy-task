import { Component, Input } from '@angular/core';
import { Task } from '../../../data/dummy-tasks';

@Component({
    selector: 'app-task',
    imports: [],
    templateUrl: './task.component.html',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;
}
