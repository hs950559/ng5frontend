import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudSampleComponent } from './crud-sample/crud-sample.component';

const routes: Routes = [
  {
    path: '',
    component: CrudSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
