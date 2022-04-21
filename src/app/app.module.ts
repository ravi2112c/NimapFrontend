import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { RecordsCategoryComponent } from './category/records-category/records-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './product/add-product/add-product.component';
import { RecordProductComponent } from './product/record-product/record-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    RecordsCategoryComponent,
    EditCategoryComponent,
    AddProductComponent,
    RecordProductComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
