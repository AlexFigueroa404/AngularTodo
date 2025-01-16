import {Injectable} from '@angular/core';
import {NewTask, Task} from "../model/task.model";
import {dummyTasks} from "../dummy-task";

@Injectable({
    providedIn: "root"
})
export class TasksService {




    private tasks: Task[] = dummyTasks;



    constructor(){
        const tasks = localStorage.getItem('tasks');

        if (tasks){
            this.tasks = JSON.parse(tasks);
        }

    }

    getUserTask(userId:string){
        return this.tasks.filter(task => task.userId === userId);
    }


    addTask(taskData: NewTask, userId:string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        })

        this.saveTask()
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTask();
    }

    private saveTask(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

}









