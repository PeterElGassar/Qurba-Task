import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/@core/data/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrlPrefix = environment.baseUrl;
   currentUserSubject: BehaviorSubject<any>= new BehaviorSubject<any>(null);

  //properties
  getCurrentUserValue() {
    return this.currentUserSubject.value;
  }

  constructor(private http: HttpClient) {}


  Login(val: any) {
    return this.http.post(this.apiUrlPrefix + `auth/login`, val);
  }
}
