import { Component, OnInit } from '@angular/core';
import { User } from "../../clients/user/user-client/models/user";
import { UserRestControllerService } from "../../clients/user/user-client/services/user-rest-controller.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //--Connect User Model: List of Objects
  //user!: User [];
  users: any;
  //users: User[] | undefined;

  //--Constructor
  constructor(private userService: UserRestControllerService) { }

  //--Component Init Method
  ngOnInit(): void {
    //--Get All Records
    //-lambda expressions syntax
    this.userService.findAllUsingGET().subscribe(users => this.users = users);
    //(!)Метод findAllUsingGET() возвращает тип Array<User>
    //console.log(this.users);
  }

}
