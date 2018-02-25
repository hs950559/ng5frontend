import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CrudSampleService {
  private BASE_URL = 'https://sjsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.BASE_URL);
  }

  createPost(post) {
    return this.http.post(this.BASE_URL, post);
  }

  updatePost(post) {
    console.log(post);
    return this.http.patch(`${this.BASE_URL}/${post.id}`,  { title: 'Kool'});
  }

  removePost(post) {
    return this.http.delete(`${this.BASE_URL}/${post.id}`);
  }
}
