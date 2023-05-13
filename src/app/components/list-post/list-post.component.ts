import { Component } from '@angular/core';
import { ListPostsService } from 'src/app/services/list-posts.service';

import { Post } from 'src/app/post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  posts!: Post[];

  constructor(private listPosts: ListPostsService) {
    this.getList();
  }

  getList(): void {
    this.listPosts.getAll().subscribe((responsePosts) => (this.posts = responsePosts));
  }

  apagarPost(id: number, posts: Post[]): void {
    this.posts = posts.filter((post) => post.id !== id);
    this.listPosts.apagarUmPost(id).subscribe();
  }
}
