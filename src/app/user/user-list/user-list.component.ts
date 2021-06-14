import { Component, OnInit } from '@angular/core';
import {User} from "../../client/user/user-client/models/user";
import {UserRestControllerService} from "../../client/user/user-client/services/user-rest-controller.service";


/**
 *=USER-COMPONENT DEFINITION
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //--Connect UserService Data
  //-single Object;
  //user: User;                 //!!ошибка компиляции: Property 'user' does not exist on type 'UserListComponent'.
  user!: User;                  //--ошибки компиляции нет, но есть ошибка в JavaScript консоли браузера;

  //-list of Objects;
  //user!: UserListComponent;   //=!ОШИБКА
  //user: User[] | undefined;   //--autofix   //=!ОШИБКА

  //--Component Constructor
  constructor(private userService: UserRestControllerService) { }

  //--Метод вызывающий Компоненты при инициализации
  ngOnInit(): void {

    //--Get single Record
    //-callback style syntax
    const userId: number = 1;
    this.userService.getUserUsingGET(userId).subscribe(user => this.user = user);
    //-observer style syntax
    /*
    this.userService.getUserUsingGET(userId).subscribe({
      next: user => this.user = user
      //error: user => this.user = user
    });
    */

    //--debug
    //console.log(this.user.userId);
  }

}
