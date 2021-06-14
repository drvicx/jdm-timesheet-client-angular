import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { TimedataListComponent } from './timedata/timedata-list/timedata-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TimedataListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
