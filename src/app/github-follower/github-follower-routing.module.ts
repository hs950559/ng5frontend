import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubFollowerComponent } from './github-follower.component';

const routes: Routes = [
  {
    path: '',
    component: GithubFollowerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubFollowerRoutingModule { }
