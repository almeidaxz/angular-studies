import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';

import { SinglePostService } from 'src/app/services/single-post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  post!: Post;

  constructor(private singlePost: SinglePostService, private route: ActivatedRoute) {
    this.getPost();
  }

  getPost() {
    this.singlePost.getSinglePost(Number(this.route.snapshot.paramMap.get("id"))).subscribe((resPost) => (this.post = resPost));
  }
}
