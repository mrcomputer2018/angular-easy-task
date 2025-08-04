import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../../data/dummy-users';

@Component({
    selector: '',
    standalone: true,
    imports: [],
    templateUrl: './user.component.html',
    styleUrls: [],
})
export class UserComponentSignals {
    // selecionando um usuario aleatoriamente do array DUMMY_USERS
    selectedUser = signal(DUMMY_USERS[0]);

    imagePath = computed(() => {
        return this.selectedUser().avatar;
    });

    /* get imagePath(): string {
        return this.selectedUser();
    } */

    onSelectUser() {
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        // Atualizando o usuário selecionado com um usuário aleatório do array DUMMY_USERS
        this.selectedUser.set(DUMMY_USERS[randomIndex]);
    }
}
