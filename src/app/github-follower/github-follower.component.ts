import { Component, OnInit } from '@angular/core';
import { GithubFollowerService } from './github-follower.service';

@Component({
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.scss']
})
export class GithubFollowerComponent implements OnInit {
  followers;

  constructor(private githubService: GithubFollowerService) { }

  ngOnInit() {
    this.githubService.getAll()
      .subscribe((res) => {
        this.followers = res;
      });
  }

  findFollower(username){
    console.log(username);
  }
}
