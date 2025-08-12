import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/task.model';

@Component({
    selector: 'app-task',
    imports: [],
    templateUrl: './task.component.html',
})
export class TaskComponent {
    @Input({ required: true }) task!: Task;
    @Output() complete = new EventEmitter<string>();

    onCompleteTask() {
        this.complete.emit(this.task.id);
    }
}
