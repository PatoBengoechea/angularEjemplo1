import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListUsersComponent,
    HttpModule,
    HttpClientModule,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
