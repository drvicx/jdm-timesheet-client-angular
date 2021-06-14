import { Component, OnInit } from '@angular/core';
import {Timedata} from "../../client/timedata/timedata-client/models/timedata";
import {TimedataRestControllerService} from "../../client/timedata/timedata-client/services/timedata-rest-controller.service";


/**
 *=TIMEDATA-COMPONENT DEFINITION
 */
@Component({
  selector: 'app-timedata-list',
  templateUrl: './timedata-list.component.html',
  styleUrls: ['./timedata-list.component.css']
})
export class TimedataListComponent implements OnInit {

  //--Connect TimedataService Data
  //-single Object;
  timedata!: Timedata;               //--ошибки компиляции нет, но есть ошибка в JavaScript консоли браузера;

  //--Component Constructor
  constructor(private timedataService: TimedataRestControllerService) { }

  //--Метод вызывающий Компоненты при инициализации
  ngOnInit(): void {
    //--Get single Record
    //-callback style syntax
    const id: number = 1;
    this.timedataService.getTimedataUsingGET(id).subscribe(timedata => this.timedata = timedata);
  }

}
