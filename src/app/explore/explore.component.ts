import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/Post.model';
import { ExploreService } from './explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  posts: Post[] = []

  constructor(private exploreService: ExploreService) { }

  ngOnInit(): void {
    this.posts = this.exploreService.getPosts();
  }


}

