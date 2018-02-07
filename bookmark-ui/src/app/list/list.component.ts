import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private http: HttpClient) {
  }

  displayedColumns = ['name', 'action'];

  dataSource = new MatTableDataSource(PROJECT_DATA);


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    console.log(PROJECT_DATA);

    this.http.get<Project []>('http://localhost:8080/api/projects').subscribe(data => {
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
