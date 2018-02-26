import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'forms', loadChildren: 'app/forms/forms.module#TdfFormsModule' },
  { path: 'crud', loadChildren: 'app/crud/crud.module#CrudModule' },
  { path: 'github-follower', loadChildren: 'app/github-follower/github-follower.module#GithubFollowerModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
