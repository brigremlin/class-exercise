import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/app/shared/Post.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  postSub: Subscription;

  posts: Post[] = [];

  showForm = false;

  content: string = "";
  author = 'Username';

  constructor(private profileService: ProfileService) {
    this.postSub = profileService.post$.subscribe(
      (posts)=>{
        this.posts = posts;
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.profileService.addPost(new Post(this.author, this.content));
    this.content = ""
    this.showForm = false;
  }

}
