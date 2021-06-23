import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { TimedataListComponent } from './timedata/timedata-list/timedata-list.component';
import { OrgdataListComponent } from './orgdata/orgdata-list/orgdata-list.component';
import { UserSingleComponent } from './user/user-single/user-single.component';
import { TimedataSingleComponent } from './timedata/timedata-single/timedata-single.component';
import { OrgdataSingleComponent } from './orgdata/orgdata-single/orgdata-single.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TimedataListComponent,
    OrgdataListComponent,
    UserSingleComponent,
    TimedataSingleComponent,
    OrgdataSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
