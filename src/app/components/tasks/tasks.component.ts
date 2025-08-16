import { Task } from '../../models/task.model';
import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../../data/dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [TaskComponent, NewTaskComponent],
    templateUrl: './tasks.component.html',
})
export class TasksComponent {
    @Input({ required: true }) userId!: string;
    @Input({ required: true }) name!: string;
    isAddingTask: boolean = false;

    tasks: Task[] = dummyTasks;

    onStartAddTask() {
        this.isAddingTask = true
    }

    get selectedUserTasks() {
        return this.tasks.filter(task => task.userId === this.userId);
    }

    onCompleteTask(taskId: string) {
        console.log(`Task completed: ${taskId}`);
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}
