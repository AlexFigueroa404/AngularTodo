import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewTask, Task} from "../../model/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [
  //   ReactiveFormsModule,
  //   FormsModule
  // ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {


  constructor(private tasksService: TasksService) {
  }

  @Input({required:true}) userId!:string;
  @Output() close = new EventEmitter();

  enteredTitle = '';
  enteredSummary = '';

  enteredDate = '';


  onCloseDialog() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
        {
          title: this.enteredTitle,
          summary: this.enteredSummary,
          date: this.enteredDate,
        }, this.userId
    )

    this.close.emit()
  }
}
