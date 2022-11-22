import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrlPrefix = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAll(url: string): Observable<any> {
    const fullUrl: string = this.apiUrlPrefix + url;
    return this.http.get(fullUrl);
  }

}
