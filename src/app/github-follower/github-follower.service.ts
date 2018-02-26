import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubFollowerService extends DataService{
  constructor(http: HttpClient) {
    super('https://api.github.com/users/octocat/followers', http);
   }
}
