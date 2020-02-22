import { Post } from '../models/posts.models';

export class PostsGenerator {

    posts: Post[] = [];

    constructor() {        
    }

    generate(): Post[] {
        this.posts.push(new Post('My first post !', 'This is my first post', 0, new Date()));
        this.posts.push(new Post('This is a banana !', 'What do you think this fruit could be? Leave a like to know', 0, new Date()));
        this.posts.push(new Post('No more', 'I am sick and tired of this...', 0, new Date()));
        return this.posts;
    }

}