import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  // private BASE_URL = 'https://sjsonplaceholder.typicode.com/posts';

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }

  create(data) {
    return this.http.post(this.url, data);
  }

  update(data) {
    return this.http.patch(`${this.url}/${data.id}`,  data);
  }

  remove(data) {
    return this.http.delete(`${this.url}/${data.id}`);
  }
}
