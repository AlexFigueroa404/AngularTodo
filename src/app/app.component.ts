import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {User} from "./model/user.model";
import {TaskComponent} from "./tasks/task/task.component";
import {TasksComponent} from "./tasks/tasks.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        HeaderComponent,
        UserComponent,
        TasksComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {

    users: User[] = DUMMY_USERS;

    // selectedUserId:string = 'u1';
    selectedUserId?:string;

    get selectUser():User{
        return this.users.find(user => user.id === this.selectedUserId)!;
    }

    onSelectUser(id:string):void{
        this.selectedUserId = id;
    }
}
