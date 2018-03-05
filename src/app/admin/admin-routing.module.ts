import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SecretComponent } from './secret.component';

const routes: Routes = [{
    path: '',
    component: AdminComponent,
    pathMatch: 'full'
},
{
  path: 'secret',
  component: SecretComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
