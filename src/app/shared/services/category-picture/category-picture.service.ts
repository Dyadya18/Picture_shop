import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../models/category.model';
import {Comment} from '../../models/comment.model';




@Injectable({
  providedIn: 'root'
})
export class CategoryPictureService {
  constructor(public http: HttpClient) {
  }
  getCategory(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }
}
