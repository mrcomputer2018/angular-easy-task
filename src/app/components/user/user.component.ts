import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
    selector: 'app-user',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
})
export class UserComponent {
    @Input({ required: true }) id!: string;
    @Input({ required: true }) avatar!: string;
    @Input({ required: true }) name!: string;
    @Output() select = new EventEmitter<string>();

    //id = input.required<string>();
    //avatar = input.required<string>();
    //name = input.required<string>();
    //select = output.required<string>();

    get imagePath(): string {
        return this.avatar;
    }

   //imagePath = computed(() => this.avatar());

    onSelectUser() {
        this.select.emit(this.id);
    }
}
