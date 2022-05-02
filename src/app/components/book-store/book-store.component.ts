import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/Book.model';
import { BooksService } from 'src/app/shared/services/books.service';

@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.loadingBooks();
  }

  loadingBooks() {
    this.bookService.getBooks().subscribe(r => r.forEach(value => {
      this.books.push(value);
    }));
  }

  filterActived(books: Book[]){
    if(books.length == 0){
      this.books = [];
      this.loadingBooks();
      return;
    }
    this.books = books;

  }

}
