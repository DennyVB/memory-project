import { Component, OnInit} from '@angular/core';
import { BackendService } from "../backend.service";

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  data: any;
  constructor(private backendService: BackendService) {
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    this.backendService.getData().subscribe(
      (data) => {
        this.data = data
        console.log(data)
      },
      (error) => {
        console.error(error);
      }
    );
  }





}
