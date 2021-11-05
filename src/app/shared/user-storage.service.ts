import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './Post.model';
import { ExploreService } from '../explore/explore.service';

@Injectable({ providedIn: 'root' })
export class UserStorageService {
  constructor(
    private http: HttpClient,
    private exploreService: ExploreService
  ) {}

  storePosts() {
    const posts = this.exploreService.getPosts();
    this.http
      .put(
        'https://authenticationtesting-a9881-default-rtdb.firebaseio.com/posts.json',
        posts
      )
      .subscribe((response) => {
        console.log(posts);
      });
  }
}
