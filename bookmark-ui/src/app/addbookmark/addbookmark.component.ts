import {Component, OnInit} from '@angular/core';
import {Projectbookmark} from "../projectbookmark";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Bookmarktype} from "../bookmarktype";
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-addbookmark',
  templateUrl: './addbookmark.component.html',
  styleUrls: ['./addbookmark.component.css']
})
export class AddbookmarkComponent implements OnInit {

  projectbookmark = new Projectbookmark(null, null, null, null, null);

  bookmarktype = new Bookmarktype(null, null);


  constructor(private http: HttpClient, private globalService: GlobalService) {
  }


  ngOnInit() {

    this.globalService.projectId.subscribe(
      (projectId) => {

        this.projectbookmark.projectId = projectId;

      }
    );

    this.globalService.projectName.subscribe(
      (projectName) => {

        this.projectbookmark.name = projectName;

      }
    );

    //this.projectbookmark.name = "TEST";
    //this.projectbookmark.projectId =2;
    this.projectbookmark.type = "App";
  }

  save(form: NgForm) {

    alert(JSON.stringify(this.projectbookmark));


    this.http.post<Projectbookmark []>('http://localhost:8080/api/projectbookmark', this.projectbookmark).subscribe(data => {
      console.log(data);

    });

  }

}
