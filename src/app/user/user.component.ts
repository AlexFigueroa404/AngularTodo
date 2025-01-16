import {Component, computed, Input, signal, input, Output, EventEmitter} from '@angular/core';
import {User} from "../model/user.model";
import {DUMMY_USERS} from "../dummy-users";
import {CardComponent} from "../shared/card/card.component";

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
    selector: 'app-user',
    // standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {

  // selectedUser:User = DUMMY_USERS[randomUserIndex];
/*

  selectedUser = signal(DUMMY_USERS[randomUserIndex]);

  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`)
*/

  // get imagePath():string{
  //   return "assets/users/" + this.selectedUser().avatar;
  // }


/*  onSelectedUser():void{

    const randomUserIndex:number = Math.floor(Math.random() * DUMMY_USERS.length);


    console.log("clicked")
    // this.selectedUser = DUMMY_USERS[randomUserIndex];
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]);

  }*/

 //    indicamos con ! que el valor no sera null ni undefined cuando se usa pero debemos especificar required:true sino estariamos diciendo una mentira
 // @Input({required:true}) avatar!:string;
 // @Input({required:true}) name!:string;
 // @Input({required:true}) id!:string;

    @Input({required:true}) user: User | undefined;

    // avatar = input.required<string>()
    // name = input.required<string>()
    @Output() select:EventEmitter<string> = new EventEmitter();
 get imagePath(){
     return "assets/users/" + this.user?.avatar;
 }

  onSelectedUser():void{
    this.select.emit(this.user?.id);

  }


  @Input()
  isSelectedUser:boolean = false;





}
