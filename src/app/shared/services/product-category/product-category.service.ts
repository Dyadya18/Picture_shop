import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Picture} from '../../models/picture.model';




// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  constructor(public http: HttpClient) {
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  findPicture(id: number) {
    return this.http.get<Picture[]>(`http://localhost:3000/products/${id}`);
  }
  fetch(): Observable<Picture[]>{
    return this.http.get<Picture[]>(`http://localhost:3000/products/`);
  }
}

