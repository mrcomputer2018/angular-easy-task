import { Task } from '../../models/task.model';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../data/dummy-tasks';

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent],
    templateUrl: './tasks.component.html',
})
export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name!: string;

    tasks: Task[] = dummyTasks;

    addTask() {
        // Logic to add a task
        console.log('Task added');
    }

    get selectedUserTasks() {
        return this.tasks.filter(task => task.userId === this.userId);
    }

    onCompleteTask(taskId: string) {
        console.log(`Task completed: ${taskId}`);
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}
