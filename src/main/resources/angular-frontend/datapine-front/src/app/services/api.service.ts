import { Http, RequestMethod , Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class ApiService {

  headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private http: Http) { }

  get(path: string): Observable<any> {


    return this.http.get(path)
      .finally(() => {
      });
  }


  login(path: string, username: string, password: string) {
    const body = `username=${username}&password=${password}`;
    const hed = new Headers();
    hed.append("Content-Type","application/x-www-form-urlencoded")
    return this.http.request(
      path,
      {
        method: RequestMethod.Post,
        body: body,
        headers: hed,
        withCredentials:true
      }
    );
  }



  put(path: string, body, customHeaders?): Observable<any> {

    return this.http.request(path,
      {
        method: RequestMethod.Put,
        body: body,
        headers: customHeaders || this.headers,
        withCredentials: true
      }
    )

      .finally(() => {
      });
  }

  delete(path: string): Observable<any> {

    return this.http.delete(path)
      .finally(() => {
      });
  }

  post(path: string, body, customHeaders?): Observable<any> {


    return this.http.request(
      path,
      {
        method: RequestMethod.Post,
        body: body,
        headers: customHeaders || this.headers,
        withCredentials: true
      }
    )
      .finally(() => {
      });
  }



}