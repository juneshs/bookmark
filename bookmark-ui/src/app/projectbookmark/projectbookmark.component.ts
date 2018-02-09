import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-projectbookmark',
  templateUrl: './projectbookmark.component.html',
  styleUrls: ['./projectbookmark.component.css']
})
export class ProjectbookmarkComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  displayedColumns = ['name', 'url', 'action'];

  dataSource = new MatTableDataSource(PROJECT_DATA);


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    console.log(PROJECT_DATA);

    this.http.get<Project []>('http://localhost:8080/api/projectbookmarks').subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);

    });
  }
}

export interface Project {
  id: number;
  name: string;
}


const PROJECT_DATA: Project[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'}

];
