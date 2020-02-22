import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/posts.models';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  likeIt() {
    console.log('like it !');
    this.post.loveIts++;
  }

  hateIt() {
    console.log('hate it !');
    this.post.loveIts--;
  }

  getColor() {
    return this.post.loveIts > 0 ? 'green' : this.post.loveIts < 0 ? 'red' : 'black';
  }

  isSuccess() {
    return this.post.loveIts > 0;
  }

  isDanger() {
    return this.post.loveIts < 0;
  }

}
