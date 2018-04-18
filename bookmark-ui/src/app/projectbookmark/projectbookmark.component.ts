import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from "../global.service";


@Component({
  selector: 'app-projectbookmark',
  templateUrl: './projectbookmark.component.html',
  styleUrls: ['./projectbookmark.component.css']
})
export class ProjectbookmarkComponent implements OnInit {


  constructor(private http: HttpClient, public globalService: GlobalService) {

  }

  displayedColumns = ['name', 'url', 'action'];

  //dataSource = new MatTableDataSource();

  // projectUrl = '/api/projectbookmarks';


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.globalService.dataSource.filter = filterValue;
  }

  ngOnInit() {

    // this.globalService.projectId.subscribe(
    //   (projectId) => {
    //
    //     this.projectUrl = '/api/projectbookmarkforprojectid?projectId=' + projectId;
    //
    //     this.http.get<Project []>(this.projectUrl).subscribe(data => {
    //       this.dataSource = new MatTableDataSource(data);
    //     });
    //
    //   }
    // );
    //
  }



  editClick(url) {
    window.open(url);
  }

}

export interface Project {
  id: number;
  name: string;
}
