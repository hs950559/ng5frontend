import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubFollowerRoutingModule } from './github-follower-routing.module';
import { GithubFollowerComponent } from './github-follower.component';
import { GithubFollowerService } from './github-follower.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    GithubFollowerRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [GithubFollowerComponent, ProfileComponent],
  providers: [GithubFollowerService]
})
export class GithubFollowerModule { }
