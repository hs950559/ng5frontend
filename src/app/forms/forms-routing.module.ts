import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: TdfComponent
    },
    {
      path: 'mdf',
      component: MdfComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
