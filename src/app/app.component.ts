import { Component } from '@angular/core';
import { Post } from './models/posts.models';
import { PostsGenerator } from './helpers/posts-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogPosts';
  postList: Post[] = [];

  constructor() {
    this.postList = new PostsGenerator().generate();
  }
}
