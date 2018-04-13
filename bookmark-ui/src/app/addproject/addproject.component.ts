import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  constructor(private globalService: GlobalService) {
  }

  projectId: any;

  ngOnInit() {


    this.globalService.projectId.subscribe(
      (projectId) => {
        //this.projectId = projectId;
      }
    );
  }




}
