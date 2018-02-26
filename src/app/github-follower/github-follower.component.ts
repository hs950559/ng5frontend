import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubFollowerService } from './github-follower.service';

@Component({
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.scss']
})
export class GithubFollowerComponent implements OnInit {
  followers;

  constructor(private router: Router, private githubService: GithubFollowerService) { }

  ngOnInit() {
    this.githubService.getAll()
      .subscribe((res) => {
        this.followers = res;
      });
  }

  findFollower(username){
    console.log(username);
  }

  gotoProfile(){
    this.router.navigate(['github-follower', '1555350', 'myhduck'], {
      queryParams: {
        page: 100,
        order: 'latest'
      }
    });
  }
}
