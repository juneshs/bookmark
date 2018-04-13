import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  public API = '//localhost:8080/api';
  public PROJECT_API = this.API + '/projects';

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/api/projects');
  }

  save(project: any): Observable<any> {
    let result: Observable<Object>;
    if (project['id']) {
      result = this.http.put(project.href, project);
    } else {

      result = this.http.post(this.PROJECT_API, project);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }

}
