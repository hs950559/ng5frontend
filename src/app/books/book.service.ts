import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {
  private API_URL = 'https://hkauthapi.herokuapp.com/books';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.API_URL)
    .pipe(
      catchError(this.handleError('getAllBooks', [1, 2]))
    );
  }

  create(data) {
    return this.http.post(this.API_URL, data)
    .pipe(
      catchError(this.handleError('addBook'))
    );
  }

  update(data) {
    return this.http.put(`${this.API_URL}/${data._id}`,  data)
    .pipe(
      catchError(this.handleError('updateBook'))
    );
  }

  remove(data) {
    return this.http.delete(`${this.API_URL}/${data._id}`)
    .pipe(
      catchError(this.handleError('removeBook'))
    );
  }

 /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(operation, result, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
