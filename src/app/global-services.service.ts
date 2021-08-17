import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {
  url: string = environment.apiBaseUrl;
  authenticated = false;

  constructor(private http: HttpClient) { }
  registerUser(object: Object) {
    console.log(this.url + '/user/add');
    return this.http.post(this.url + '/user/add', object);
  }


}
