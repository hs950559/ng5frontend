import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';

@Injectable()
export class CrudSampleService extends DataService {
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts', http);
   }
}
