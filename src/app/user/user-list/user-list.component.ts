import { Component, OnInit } from '@angular/core';
//import {User} from "../../clients/user/user-client/models/user";
//import {UserRestControllerService} from "../../clients/user/user-client/services/user-rest-controller.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //--Connect User Model: List of Objects

  //constructor(private userService: UserRestControllerService) { }
  constructor() { }

  ngOnInit(): void {

  }

}
