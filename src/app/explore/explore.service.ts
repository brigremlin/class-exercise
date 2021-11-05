import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  posts = [
    {id: 1, author: 'John B.', content: 'Can\'t wait to travel to Paris!'},
    {id: 2, author: 'Kelly F.', content: 'Does anyone know a good sushi place near Camp Washington?'},
    {id: 3, author: 'James L.', content: 'When life gives you lemons, say no thanks.'},
    {id: 4, author: 'Carrie W.', content: 'Shooting the Breeze'},
    {id: 5, author: 'Martin G.', content: 'Local Community Good Stuff'}
  ];
  constructor() { }

  getPosts(){
    return this.posts;
  }
}
