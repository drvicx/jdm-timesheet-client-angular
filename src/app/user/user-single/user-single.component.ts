import { Component, OnInit } from '@angular/core';
import { User } from "../../clients/user/user-client/models/user";
import { UserRestControllerService } from "../../clients/user/user-client/services/user-rest-controller.service";


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})

export class UserSingleComponent implements OnInit {
  //--Connect User Model: Single Object
  user!: User

  //--Constructor
  constructor(private userService: UserRestControllerService) { }

  //--Component Init Method
  ngOnInit(): void {
    //--Get single Record
    //-lambda expressions syntax
    const userId: number = 1;
    this.userService.getUserByIdUsingGET(userId).subscribe(user => this.user = user);
  }

}
