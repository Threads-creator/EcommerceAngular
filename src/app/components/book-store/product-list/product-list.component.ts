import { BooksService } from 'src/app/shared/services/books.service';
import { Book } from './../../../shared/models/Book.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() books: Book[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
