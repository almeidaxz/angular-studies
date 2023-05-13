import { Injectable } from '@angular/core';
import { Post } from '../post';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SinglePostService {
  apiUrl: string = "http://jsonplaceholder.typicode.com/posts/";

  constructor(private http: HttpClient) { }

  getSinglePost(id: number): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + id);
  }
}
