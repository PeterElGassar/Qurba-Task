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

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiUrlPrefix}products`);
  }

  

  getAllProductsCategories(): Observable<any> {
    return this.http.get(`${this.apiUrlPrefix}products/categories`);

  }



}
