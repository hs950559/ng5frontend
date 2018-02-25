import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CrudSampleService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`${this.BASE_URL}/posts`);
  }
}
