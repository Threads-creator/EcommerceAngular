import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookStoreComponent } from './components/book-store/book-store.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltersComponent } from './components/book-store/filters/filters.component';
import { ProductListComponent } from './components/book-store/product-list/product-list.component';
import { ProductItemComponent } from './components/book-store/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
