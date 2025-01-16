import {Component, Input, OnInit} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTask, Task} from "../model/task.model";
import {dummyTasks} from "../dummy-task";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

@Component({
    selector: 'app-tasks',
    standalone: true,
    imports: [
        TaskComponent,
        NewTaskComponent
    ],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{


    constructor(private tasksService: TasksService) {
    }


    @Input({required: true}) name!: string;
    @Input({required: true}) userId!: string;

    isAddingTask: boolean = false;




    get selectedUserTasks(): Task[] {
        return this.tasksService.getUserTask(this.userId)
    }


    onCompletedTask(id: string) {
        this.tasksService.removeTask(id);
    }


    onStartAddTask() {
        this.isAddingTask = true;
    }


    onCloseDialog() {
        this.isAddingTask = false;
    }

    // onAddTask(taskData: NewTask) {
    //
    //
    //     this.tasksService.addTask(taskData,this.userId);
    //
    //     this.isAddingTask = false;
    // }

    ngOnInit(): void {
    }
}
