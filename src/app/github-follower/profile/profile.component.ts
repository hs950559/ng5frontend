import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs/observable/combineLatest';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  follower = {
    'login': 'myhduck',
    'id': 1555350,
    'avatar_url': 'https://avatars2.githubusercontent.com/u/1555350?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/myhduck',
    'html_url': 'https://github.com/myhduck',
    'followers_url': 'https://api.github.com/users/myhduck/followers',
    'following_url': 'https://api.github.com/users/myhduck/following{/other_user}',
    'gists_url': 'https://api.github.com/users/myhduck/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/myhduck/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/myhduck/subscriptions',
    'organizations_url': 'https://api.github.com/users/myhduck/orgs',
    'repos_url': 'https://api.github.com/users/myhduck/repos',
    'events_url': 'https://api.github.com/users/myhduck/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/myhduck/received_events',
    'type': 'User',
    'site_admin': false
  };
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    combineLatest(this.route.paramMap, this.route.queryParamMap)
      .subscribe((combined) => {
        const id = combined[0].get('id');
        const username = combined[0].get('username');

        const page = combined[1].get('page');
        const order = combined[1].get('order');

        console.log(id, username);
        console.log(page, order);
      });

    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('username'));
    // this.route.paramMap.subscribe((param) => {
    //   console.log(param.get('id'));
    // });

    console.log(this.route.snapshot.queryParamMap.get('page'));
    console.log(this.route.snapshot.queryParamMap.get('order'));

    // this.route.queryParamMap.subscribe((query) => {
    //   console.log(query.get('page'));
    //   console.log(query.get('order'));
    // });
  }

}
