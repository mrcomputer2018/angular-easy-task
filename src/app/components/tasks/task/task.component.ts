import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
    selector: 'app-task',
    imports: [],
    templateUrl: './task.component.html',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;
}
