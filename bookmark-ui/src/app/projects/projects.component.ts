import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private http: HttpClient, private globalService: GlobalService) {
  }

  displayedColumns = ['name', 'action'];

  dataSource = new MatTableDataSource();


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {

    this.http.get<Project []>('http://localhost:8080/api/projects').subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);

    });
  }

  selectClick(projectId, projectName) {
    this.globalService.projectId.next(projectId);
    this.globalService.projectName.next(projectName);
  }
}

export interface Project {
  id: number;
  name: string;
}
