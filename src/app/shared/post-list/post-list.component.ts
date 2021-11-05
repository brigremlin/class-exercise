import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/profile.service';
import { Post } from 'src/app/shared/Post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() posts!: Post[];
  @Input() canDelete: boolean = false;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }
  onDelete(id: number){
    this.profileService.deletePost(id);
  }
}
