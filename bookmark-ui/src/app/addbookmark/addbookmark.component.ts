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

  projectName = null;


  constructor(private http: HttpClient, public globalService: GlobalService) {
    this.projectbookmark.name = globalService.projectName;
  }


  ngOnInit() {

    this.load();

    this.projectbookmark.type = "App";
  }


  load() {
    this.projectbookmark.projectId = this.globalService.projectId;
    this.projectName = " - " + this.globalService.projectName;
  }


  save(form: NgForm) {

    this.projectbookmark.projectId = this.globalService.projectId;

    //alert(JSON.stringify(this.projectbookmark));


    this.http.post<Projectbookmark []>('/api/projectbookmark', this.projectbookmark).subscribe(data => {
      console.log(data);

    });

  }


}
