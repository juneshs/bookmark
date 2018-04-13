import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {ReplaySubject} from "rxjs/ReplaySubject";
@Injectable()
export class GlobalService {

  public projectId: Subject<Number> = new ReplaySubject<Number>();

  public projectName: Subject<string> = new ReplaySubject<string>();

}
