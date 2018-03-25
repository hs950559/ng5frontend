import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { FormsModule } from '@angular/forms';
import { BookService } from './book.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [BooksComponent],
  providers: [ BookService ]
})
export class BooksModule { }
