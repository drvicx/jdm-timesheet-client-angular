import { Component, OnInit } from '@angular/core';
//import {} from '';
import {OrgdataRestControllerService} from "../../clients/orgdata/orgdata-client/services/orgdata-rest-controller.service";

@Component({
  selector: 'app-orgdata-list',
  templateUrl: './orgdata-list.component.html',
  styleUrls: ['./orgdata-list.component.css']
})

export class OrgdataListComponent implements OnInit {

  //--создаем Контейнер типа Итератор для хранения результата полученного из REST-сервиса
  //orgdatas: ListUser;

  constructor(private orgdataService: OrgdataRestControllerService) { }

  ngOnInit(): void {
  }

}
