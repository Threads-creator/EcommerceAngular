import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Book } from 'src/app/shared/models/Book.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Input() books: Book[] = [];
  @Output() booksFiltered = new EventEmitter();

  generos = ['Ação', 'Fantasia', 'Ficção Científica', 'Suspense'];

  formDe = new FormControl();
  formAte = new FormControl();
  formCategoria = new FormControl();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  filterBooks(){
    let resultado = this.books;
    if(this.formAte.value && this.formAte.value){
      resultado = this.filterByPrice(resultado);
    }
    if(this.formCategoria.value){
      resultado = this.filterByCategory(resultado);
    }

    this.clearInputs();

    resultado.forEach(value => console.log(value));
    this.booksFiltered.emit(resultado);

  }

  resetFilters() {
    this.booksFiltered.emit([]);
  }

  private clearInputs(){
    this.formDe.reset();
    this.formAte.reset();
    this.formCategoria.reset();
  }

  private filterByPrice(books: Book[]){
    let minPrice = this.formDe.value;
    let maxPrice = this.formAte.value;

    return books.filter(book => book.price >= minPrice && book.price <= maxPrice);
  }

  private filterByCategory(books: Book[]){
    let category = this.formCategoria.value;

    return books.filter(book => book.category == category);
  }

}
