import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";
import {MatTableDataSource} from "@angular/material";
import {Project} from "./project";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class GlobalService {

  // public projectId: Subject<Number> = new ReplaySubject<Number>();

  // public projectName: Subject<string> = new ReplaySubject<string>();

  constructor(private http: HttpClient) {

  }

  public projectId: number;
  public projectName: string;

  public dataSource: MatTableDataSource;


  getBookmarkData(){

        var projectUrl = '/api/projectbookmarkforprojectid?projectId=' + this.projectId;

        this.http.get<Project []>(projectUrl).subscribe(data => {
          this.dataSource = new MatTableDataSource(data);
        });
  }

}
