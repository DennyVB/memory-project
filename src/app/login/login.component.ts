import { Component, OnInit} from '@angular/core';
import { GetTokenService} from "../get-token.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  data: any;


  constructor(private getTokenService: GetTokenService, private router: Router) {
    this.username = ''
    this.password = ''
  }

  // ngOnInit() {
  //   this.login();
  // }

  login() {
    this.getTokenService.login(this.username, this.password).subscribe(
      (data) => {
        this.data = data;
        console.log(data)

        if (this.data.hasOwnProperty('token')) {
          localStorage.setItem('token', this.data.token)
          console.log('Login successful');
          this.router.navigate(['/info'])
        }
        else {
          console.log('Login failed');
        }

      }
    )

  }
}

