import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetdataComponent } from './getdata/getdata.component';
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { GraphComponent } from './graph/graph.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { UserTableComponent } from './user-table/user-table.component';



@NgModule({
  declarations: [
    AppComponent,
    GetdataComponent,
    LoginComponent,
    GraphComponent,
    ErrorMessageComponent,
    UserTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
