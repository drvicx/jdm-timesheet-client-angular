import { Component, OnInit } from '@angular/core';
import { Orgdata } from "../../clients/orgdata/orgdata-client/models/orgdata";
import { OrgdataRestControllerService } from "../../clients/orgdata/orgdata-client/services/orgdata-rest-controller.service";
import {User} from "../../clients/user/user-client/models/user";
import {UserRestControllerService} from "../../clients/user/user-client/services/user-rest-controller.service";


@Component({
  selector: 'app-orgdata-single',
  templateUrl: './orgdata-single.component.html',
  styleUrls: ['./orgdata-single.component.css']
})

export class OrgdataSingleComponent implements OnInit {
  //--Connect Orgdata Model: Single Object
  orgdata!: Orgdata

  //--Constructor
  constructor(private orgdataService: OrgdataRestControllerService) { }

  //--Component Init Method
  ngOnInit(): void {
    //--Get single Record
    //-lambda expressions syntax
    const orgdataId: number = 1;
    this.orgdataService.getOrgdataByIdUsingGET(orgdataId).subscribe(orgdata => this.orgdata = orgdata);
  }

}
