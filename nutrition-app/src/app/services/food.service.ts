import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { ReturnStatement } from '@angular/compiler';

const baseURL = "http://localhost:8080/api/foods"

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(baseURL + '?all=' + true);
  }

  getTop10(): Observable<any> {
    return this.http.get(baseURL + '?all=' + false);
  }

  getByCategoryName(name: string): Observable<any> {
    return this.http.get(`${baseURL}/category/${name}`);
  }









  create(data): Observable<any> {
    return this.http.post(baseURL, data);
  }

  addCategories(data): Observable<any> {
    return this.http.post(baseURL + '/addCategories', data);
  }



  findByName(name): Observable<any> {
    return this.http.get(`${baseURL}?name=${name}`);
  }

  findById(id): Observable<any> {
    return this.http.get(`${baseURL}/${id}`);
  }




}
