import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';
import { DUMMY_USER } from '../../data/dummy-users';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
})
export class UserComponent {
    @Input({ required: true }) user!: DUMMY_USER;
    @Output() select = new EventEmitter<string>();

    //id = input.required<string>();
    //avatar = input.required<string>();
    //name = input.required<string>();
    //select = output.required<string>();

   //imagePath = computed(() => this.avatar());

    onSelectUser() {
        this.select.emit(this.user.id);
    }
}
