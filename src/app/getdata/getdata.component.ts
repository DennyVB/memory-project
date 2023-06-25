import { Component, OnInit} from '@angular/core';
import { BackendService } from "../backend.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  data: any;
  users: any;
  constructor(private backendService: BackendService, private router: Router) {
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.backendService.getData().subscribe(
      (data) => {
        this.data = data
        this.data[2][0]['api'] = 'overig'
      },
      (error) => {
        this.router.navigate(['/login'])
      }
    );
    this.backendService.getUsers().subscribe(
      (data) => {
        this.users = data
      }
    )
  }
}
