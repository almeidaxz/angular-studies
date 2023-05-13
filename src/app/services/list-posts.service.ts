import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Post } from '../post';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPostsService {
  private apiUrl: string = "https://jsonplaceholder.typicode.com/posts/"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  apagarUmPost(id: number): Observable<Post> {
    return this.http.delete<Post>(this.apiUrl + id);
  }
}
