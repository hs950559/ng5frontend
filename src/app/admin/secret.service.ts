import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SecretService extends DataService {
  constructor(http: HttpClient) {
    super('https://hkauthapi.herokuapp.com/users/secret', http);
   }
}
