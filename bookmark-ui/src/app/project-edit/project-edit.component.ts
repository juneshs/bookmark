import {Component, OnInit} from '@angular/core';

import {ProjectService} from '../shared/project/project.service';
import {NgForm} from '@angular/forms';

import {Project} from '../project'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(private http: HttpClient, private projectService: ProjectService) {
  }

  ngOnInit() {
  }

  save(form: NgForm) {

    //alert(JSON.stringify(this.project));


    this.http.post<Project []>('http://localhost:8080/api/projects', this.project).subscribe(data => {
      console.log(data);

    });

  }

  remove(href) {
    this.projectService.remove(href).subscribe(result => {
      //this.gotoList();
      console.log('Sucess');
    }, error => console.log(error));
  }

  project = new Project(null,null);


}
