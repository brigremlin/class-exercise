import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../shared/user-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  show = false;

  constructor(private userStorage: UserStorageService) { }

  ngOnInit(): void {
  }
  toggleShow(){
    this.show = !this.show;
  }

  onSavePost() {
    this.userStorage.storePosts();
  }
}
