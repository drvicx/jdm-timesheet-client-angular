import { Component, OnInit } from '@angular/core';
import { Timedata } from "../../clients/timedata/timedata-client/models/timedata";
import { TimedataRestControllerService } from "../../clients/timedata/timedata-client/services/timedata-rest-controller.service";


@Component({
  selector: 'app-timedata-single',
  templateUrl: './timedata-single.component.html',
  styleUrls: ['./timedata-single.component.css']
})

export class TimedataSingleComponent implements OnInit {
  //--Connect Timedata Model: Single Object
  timedata!: Timedata

  //--Constructor
  constructor(private timedataService: TimedataRestControllerService) { }

  //--Component Init Method
  ngOnInit(): void {
    //--Get single Record
    //-lambda expressions syntax
    const timedataId: number = 1;
    this.timedataService.getTimedataByIdUsingGET(timedataId).subscribe(timedata => this.timedata = timedata);
  }

}
