import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USER, DUMMY_USERS } from './data/dummy-users';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, UserComponent, TasksComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'angular-easy-task';
    users = DUMMY_USERS;
    selectedUserId: string = "u1";
    name: string = '';

    private get selectedUser() {
        return this.users.find(user => user.id === this.selectedUserId)
    }

    onSelectUser(id: string) {
        this.selectedUserId = id;
        this.name = this.selectedUser ? this.selectedUser.name : '';
    }
}
