import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books;
  book = {};
  sectionTitle = 'Create';
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAll()
      .subscribe((res) => {
         this.books = res;
      });
  }

  createBook(book) {
    this.bookService.create(book)
      .subscribe((res) => {
        this.books.unshift(res);
      });
    console.log(book);
  }

  createUpdateBook(book) {
    console.log(book);

    if (book._id) {
      console.log(1);
      this.sectionTitle = 'Update';
      this.book = Object.assign({}, book);
      this.bookService.update(book)
        .subscribe((res) => {
          const index = this.books.findIndex( b => {
            return b._id === book._id;
          });

          if (index > -1) {
              console.log(index);
              this.books[index] = res;
          }
        });
    } else {
      this.sectionTitle = 'Create';
      this.bookService.create(book)
        .subscribe((res) => {
          this.books.push(res);
        });
    }

  }

  removeBook(book) {
    this.bookService.remove(book)
      .subscribe((res) => {
         const bookIndex = this.books.indexOf(book);
         this.books.splice(bookIndex, 1);
      });
  }
}
