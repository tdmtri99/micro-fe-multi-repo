import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces/book.interface';
import * as fromBooks from '../store/book';

@Component({
  selector: 'app-book',
  template: `
    <h1>Remote book</h1>
    <ng-container
      *ngIf="{
        books: books$ | async,
        isLoading: isLoading$ | async
      } as data"
    >
      <div class="header">
        <input #inputElement />
        <button (click)="onCreateBook(inputElement.value)">Create book</button>
      </div>
      <div class="container">
        <table>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
          <tbody>
            <tr *ngFor="let book of data.books">
              <td>{{ book.id }}</td>
              <td>{{ book.name }}</td>
              <td><button (click)="onDeleteBook(book)">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class BookComponent implements OnInit {
  books$!: Observable<IBook[]>;
  isLoading$!: Observable<boolean>;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }

  onCreateBook(name: string): void {
    this.store.dispatch(
      fromBooks.createBook({
        book: {
          id: Math.random(),
          name,
        },
      })
    );
  }

  onUpdateBook(book: IBook): void {
    this.store.dispatch(fromBooks.updateBook({ book }));
  }

  onDeleteBook(book: IBook): void {
    this.store.dispatch(fromBooks.deleteBook({ book }));
  }

  private initDispatch(): void {
    this.store.dispatch(fromBooks.getBooks());
  }

  private initSubscriptions(): void {
    this.books$ = this.store.pipe(select(fromBooks.selectBooksList));
    this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
  }
}
