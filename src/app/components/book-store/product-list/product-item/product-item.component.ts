import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/models/Book.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() book: Book = new Book();

  constructor() { }

  ngOnInit(): void {
  }

}
