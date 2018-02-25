import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudSampleComponent } from './crud-sample/crud-sample.component';
import { EditPostComponent } from './crud-sample/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    component: CrudSampleComponent
  },
  {
    path: ':id/edit',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
