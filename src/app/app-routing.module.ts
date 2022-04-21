import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { RecordsCategoryComponent } from './category/records-category/records-category.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { RecordProductComponent } from './product/record-product/record-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'category-list', component: RecordsCategoryComponent },
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'edit-category/:id', component: EditCategoryComponent },
  { path: 'product-list', component: RecordProductComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
