import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {GetdataComponent} from "./getdata/getdata.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'info', component: GetdataComponent},
  { path: '', redirectTo: '/info', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
