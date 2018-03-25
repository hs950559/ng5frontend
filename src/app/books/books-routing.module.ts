import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: BooksComponent
    }
    // {
    //   path: ':id',
    //   component: BookComponent
    // }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
