import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  url = 'http://localhost:6505/api/arrays/';
  constructor(private http: HttpClient) { }

  addArray(array: any): Observable<any> {
   return this.postData('create', Object.assign({arrey :array}, {isEqual: false}))
  }

  getArrays(): Observable<any> {
    return this.getData('getAll')
   }
 


  private getData(endPoint: any, body?: any) {
    return this.http.get<any>(this.url+ endPoint);
  }

  private postData(endPoint: any, body: any) {
    return this.http.post<any>(this.url+ endPoint + '', body);
  }

}

