import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/Book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private URL = 'http://localhost:3000/Books';

  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  }

  constructor(private httpCliente: HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpCliente.get<Book[]>(this.URL);
  }
}
