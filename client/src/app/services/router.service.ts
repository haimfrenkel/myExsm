import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { arrayModle } from 'src/types/interfases';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  url = 'http://localhost:6505/api/arrays/';
  constructor(private http: HttpClient) { }

  addArray(array: any): Observable<arrayModle> {
   return this.postData<arrayModle>('create', {arrey :array, isEqual: false, numberOfEqual: (-1)})
  }

  getArrays(): Observable<any> {
    return this.getData('getAll')
   }
 


  private getData(endPoint: any, body?: any) {
    return this.http.get<any>(this.url+ endPoint);
  }

  private postData<T>(endPoint: any, body: any) {
    return this.http.post<any>(this.url+ endPoint + '', body);
  }

}

