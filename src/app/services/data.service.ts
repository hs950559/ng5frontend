import { HttpClient } from '@angular/common/http';

export class DataService {
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
