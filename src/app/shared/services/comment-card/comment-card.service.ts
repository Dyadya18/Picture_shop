import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../../models/comment.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentCardService {
  coments: Comment[] = [];

  constructor(public http: HttpClient) {
  }
  fetch(): Observable<Comment[]>{
    return this.http.get<Comment[]>('http://localhost:3000/comments');
  }
  addComment(newComment: Comment): Observable<Comment> {
    return this.http.post<Comment>('http://localhost:3000/comments', newComment);
  }
}

