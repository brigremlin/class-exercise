import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Post } from '../shared/Post.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  posts: Post[] = [];
  post$: BehaviorSubject<Post[]>

  constructor() {
    this.post$ = new BehaviorSubject(this.posts);
   }

  addPost(post: Post){
    // Unshift is like push, but adds to the top
    this.posts.unshift(post);
    this.updatePosts();
  }

  deletePost(id: number){
    const postIndex = this.posts.findIndex(post => post.id === id);
    this.posts.splice(postIndex, 1);
    this.updatePosts();
  }

  updatePosts(){
    this.post$.next(this.posts.slice())
  }
}
