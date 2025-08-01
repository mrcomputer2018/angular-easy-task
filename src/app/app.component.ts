import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'angular-easy-task';
}
