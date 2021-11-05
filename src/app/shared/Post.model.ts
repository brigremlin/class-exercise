export class Post{
  public id: number;
  constructor(public author: string, public content: string ){
    this.id = Math.floor(Math.random() * 487439186);
  }
}
