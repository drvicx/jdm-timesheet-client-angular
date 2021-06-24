import { Component, OnInit } from '@angular/core';
import { TimedataRestControllerService } from "../../clients/timedata/timedata-client/services/timedata-rest-controller.service";
import {UserRestControllerService} from "../../clients/user/user-client/services/user-rest-controller.service";


@Component({
  selector: 'app-timedata-list',
  templateUrl: './timedata-list.component.html',
  styleUrls: ['./timedata-list.component.css']
})

export class TimedataListComponent implements OnInit {
  //--Connect Timedata Model: List of Objects
  timedatas: any;

  //--Constructor
  constructor(private timedataService: TimedataRestControllerService) { }

  //--Component Init Method
  ngOnInit(): void {
    //--Get All Records
    //-lambda expressions syntax
    this.timedataService.findAllUsingGET().subscribe(timedata => this.timedatas = timedata);
    //(!)Метод findAllUsingGET() возвращает тип Array<Timedata>
    console.log(this.timedatas);
  }

}
