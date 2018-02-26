import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubFollowerComponent } from './github-follower.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: GithubFollowerComponent
  },
  {
    path: ':id/:username',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubFollowerRoutingModule { }
